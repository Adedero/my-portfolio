const showToast = (toast, message = "Download started.", state = "success") => {
  toast[state](message, { position: 'top-right' });
}

export default showToast;