(async function() {
  let body = $response.body;
  const regex = /(vmess|trojan|ssr|ss|https?):\/\/[A-Za-z0-9\-=_.@\/\?&%]+/g;
  let nodes = body.match(regex) || [];
  if (nodes.length) {
    $notification.post("VPN节点提取", `共提取 ${nodes.length} 条`, "");
    console.log(nodes.join("\n"));
  }
  $done({});
})();
