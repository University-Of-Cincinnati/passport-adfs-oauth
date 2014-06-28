/**
 * `InternalOAuthError` error.
 *
 * InternalOAuthError wraps errors generated by passport-adfs-oauth. By wrapping these
 * objects, error messages can be formatted in a manner that aids in debugging
 * OAuth issues.
 *
 * @api public
 */
function InternalOAuthError(message, err) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'InternalOAuthError';
  this.message = message;
  this.oauthError = err;
};

/**
 * Inherit from `Error`.
 */
InternalOAuthError.prototype.__proto__ = Error.prototype;

/**
 * Returns a string representing the error.
 *
 * @return {String}
 * @api public
 */
InternalOAuthError.prototype.toString = function() {
  var m = this.message;
  if (this.oauthError) {
    if (this.oauthError instanceof Error) {
      m += ' (' + this.oauthError + ')';
    }
    else if (this.oauthError.statusCode && this.oauthError.data) {
      m += ' (status: ' + this.oauthError.statusCode + ' data: ' + this.oauthError.data + ')';
    }
  }
  return m;
}


/**
 * Expose `InternalOAuthError`.
 */
module.exports = InternalOAuthError;