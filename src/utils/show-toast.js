const showToast = (toast, message = "Download started.") => {
  toast.success(message, { position: 'top-right' });
}

export default showToast;