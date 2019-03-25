function handleRedirectTo(self, url) {
  if (self.props.history.location.pathname === url) return;
  self.props.history.push(url);
}

export { handleRedirectTo };
