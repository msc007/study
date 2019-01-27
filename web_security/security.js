/* Cross-Site-Request-Forgery
 *  - Attacker forges a request through hyperlinks
 *  - When victim clicks on the link, it send the request to the target website with victim's authenticated session
 *  - The website validates request and perform request (i.e transfer money to attacker). 
 * /

/* Cross-Site-Scripting (XSS)
 *  - Attacker discover a vunulable website to inject malicious script 
 *  - Attacker inject malicious script that steal's visitor's session cookies
 *  - For each visit, the malicious script will be activated.
 *  - Visitor's session cookie is now compromised 
 *  - It can be prevented by implementing Cross-Origin-Resource-Sharing (CORS), header that tell a browser to let web application running at one origin(domain).
 * /


/* Man-in-the-Middle
 * - Victim's traffics(requests) goes through attacker's proxy
 * - Attacker intercept all messages between two victims and inject new one
 * - It usually happens through unencrypted wireless access point (Wi-Fi)
 * - It can be prevented by SSL/TLS certificate (HTTPS protocol).
 * - HTTPS still can be compromised, Consider HTTP Strict Transport Security (HSTS).
 */