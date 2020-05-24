function FindProxyForURL(url, host){
  
var proxy0 = "PROXY 10.250.7.210:8080; PROXY 10.250.7.211:8080";
var proxy1 = "PROXY 10.250.7.211:8080; PROXY 10.250.7.210:8080";
var proxy2 = "PROXY 10.250.7.212:8080; PROXY 10.250.7.213:8080";
var proxy3 = "PROXY 10.250.7.213:8080; PROXY 10.250.7.212:8080";
  
var clientIP = myIpAddress(); //Ler IP do usuario  
octet = clientIP.split("."); //dividir octetos do IP
lastoct = octet[3]; //Ler o valor do quarto octeto do IP
mod = lastoct % 4; //Divide o 4 octeto por 4

  
//* Don't proxy Windows Update */
if ((host == 'download.microsoft.com') ||
	(host == 'ntservicepack.microsoft.com') ||
	(host == 'cdm.microsoft.com') ||
	(host == 'wustat.windows.com') ||
	(host == 'windowsupdate.microsoft.com') ||
	(dnsDomainIs(host, '.windowsupdate.microsoft.com')) ||
	(host == 'update.microsoft.com') ||
	(dnsDomainIs(host, '.update.microsoft.com')) ||
	(dnsDomainIs(host, '.windowsupdate.com')))
	{
	return 'DIRECT';
	}

var hostIP = dnsResolve(host);
/* Don't proxy non-routable addresses (RFC 3330) */
	if (isInNet(hostIP, '0.0.0.0', '255.0.0.0') ||
	isInNet(hostIP, '10.0.0.0', '255.0.0.0') ||
	isInNet(hostIP, '127.0.0.0', '255.0.0.0') ||
	isInNet(hostIP, '169.254.0.0', '255.255.0.0') ||
	isInNet(hostIP, '172.16.0.0', '255.240.0.0') ||
	isInNet(hostIP, '192.0.2.0', '255.255.255.0') ||
	isInNet(hostIP, '192.88.99.0', '255.255.255.0') ||
	isInNet(hostIP, '192.168.0.0', '255.255.0.0') ||
	isInNet(hostIP, '198.18.0.0', '255.254.0.0') ||
	isInNet(hostIP, '224.0.0.0', '240.0.0.0') ||
	isInNet(hostIP, '240.0.0.0', '240.0.0.0') ||
	isInNet(hostIP, '172.16.0.0',  '255.240.0.0') ||
	isInNet(hostIP, '172.32.0.0',  '255.255.254.0') ||
	isInNet(hostIP, '192.168.0.0', '255.255.0.0') ||
	isInNet(hostIP, '127.0.0.0',   '255.0.0.0') ||
	isInNet(hostIP, '200.143.181.26',   '255.255.255.255') ||
	isInNet(hostIP, '177.43.220.106',   '255.255.255.255') ||
	isInNet(hostIP, '187.32.158.33',   '255.255.255.255') ||
	isInNet(hostIP, '201.94.150.186',   '255.255.255.255') ||
	isInNet(hostIP, '177.185.13.56',   '255.255.255.255') ||
	isInNet(hostIP, '177.128.40.81',   '255.255.255.255') ||
	isInNet(hostIP, '122.100.106.207',   '255.255.255.255')||
	isInNet(hostIP, '122.100.106.208',   '255.255.255.255') ||
	isInNet(hostIP, '10.250.0.91',   '255.255.255.255') ||
	isInNet(hostIP, '10.250.0.139',   '255.255.255.255') ||
	isInNet(hostIP, '191.241.238.94',   '255.255.255.255') ||
	isInNet(hostIP, '186.228.0.49',   '255.255.255.255') ||
	isInNet(hostIP, '200.217.4.49',   '255.255.255.255') ||
	isInNet(hostIP, '65.156.1.99',   '255.255.255.255') ||
	isInNet(hostIP, '200.155.86.0',   '255.255.255.0') ||
	isInNet(hostIP, '200.155.82.0',   '255.255.254.0') ||
	isInNet(hostIP, '200.152.45.138',   '255.255.255.255') ||
	isInNet(hostIP, '189.9.137.162',   '255.255.255.255') ||
	isInNet(hostIP, '189.9.7.10',   '255.255.255.255') ||
	isInNet(hostIP, '161.148.231.57',   '255.255.255.255') ||
	isInNet(hostIP, '200.152.32.144',   '255.255.255.255') ||
	isInNet(hostIP, '161.148.231.190',   '255.255.255.255') ||
	isInNet(hostIP, '191.242.241.173',   '255.255.255.255') ||
	isInNet(hostIP, '192.203.117.159',   '255.255.255.255') ||
	isInNet(hostIP, '201.20.27.73',   '255.255.255.255') ||
	isInNet(hostIP, '177.184.2.10',   '255.255.255.255'))	
	{
		return 'DIRECT';
	}

// Ignora o proxy para zonas internas
if ( (host ==  '.rededor.com.br')
    ||(host == '.rede.labsdor')
    ||(host ==  '.rededor.corp')
)
{
// Apenas se resolver para IPs internos
 var resolved_ip = dnsResolve(host);
 if (   isInNet(resolved_ip, '10.0.0.0',    '255.0.0.0')
     || isInNet(resolved_ip, '172.16.0.0',  '255.240.0.0')
     || isInNet(resolved_ip, '172.32.0.0',  '255.255.254.0')
     || isInNet(resolved_ip, '192.168.0.0', '255.255.0.0')
     || isInNet(resolved_ip, '127.0.0.0',   '255.0.0.0')
     )
{
		return 'DIRECT';
}
}
    {
	if ( mod == 0 ) { return 'DIRECT' }
	else  if ( mod == 1 ) { return 'DIRECT' }
	else  if ( mod == 2 ) { return 'DIRECT' }
	else  if ( mod == 3 ) { return 'DIRECT' }						
    }

}