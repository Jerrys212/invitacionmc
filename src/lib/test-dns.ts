import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dns.resolveSrv(
  "_mongodb._tcp.cluster0.zlhh5.mongodb.net",
  (err, addresses) => {
    console.log("ERR:", err);
    console.log("ADDR:", addresses);
  }
);