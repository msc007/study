/*
 * Cookie: 4KB data which persist inside browser
 * Local Storage: it's like bigger version os cookie; 5MB data persist inside browser
 * Session: local storage object that will be expired on window close
 * 
 *
 * JWT(Jason Web Token): When user login, server respond with JWT(made with secretkey). Then client side store JWT (cookie, session, local storage).
 *                       When user make api request with header that includes JWT, server verify JWT with secretkey. Now user's api request authenticated  
*/