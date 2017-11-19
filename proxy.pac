// https://pac.oonnnoo.com
var proxy = 'PROXY proxy.pac.oonnnoo.com:8118;SOCKS5 proxy.pac.oonnnoo.com:1080;'
// ad domains
var adDomains = [
  'adv.sec.miui.com'
]
// gfw block domains
var blockDomains = [
  'google.com'
]

function suffix (s1, s2) {
  var s3 = '.' + s2
  var hit = s1.indexOf(s3, s1.length - s3.length) !== -1
  if (hit === true) {
    return true
  }
  if (s1 === s2) {
    return true
  }
  return false
}

function loopc (List, host, Rex) {
  for (var i in List) {
    if (suffix(host, List[i])) {
      return Rex
    }
  }
  return false
}

function FindProxyForURL (url, host) {
  var tunnel = ''
  tunnel = loopc(adDomains, host, 'PROXY 0.0.0.0;')
  if (tunnel !== false) {
    return tunnel
  }
  tunnel = loopc(blockDomains, host, proxy)
  if (tunnel !== false) {
    return tunnel
  }
  return 'DIRECT;'
}
