import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

export function AuthCallBack() {
    const location = useLocation();
    const cookies = new Cookies(); 

    useEffect(() => {
        console.log("📨 Google Callback URL:", window.location.href);
        
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const userEncoded = params.get('user');
        const success = params.get('success');
        
        console.log("🔍 Extracted:", { 
            success, 
            token: token ? "Present" : "Missing", 
            userEncoded: userEncoded ? "Present" : "Missing" 
        });

        if (success === 'true' && token && userEncoded) {
            try {
                const userJson = decodeURIComponent(userEncoded);
                const user = JSON.parse(userJson);
                
                console.log("✅ Authentication successful!");
                console.log("👤 User:", user);
                console.log("🔑 Token (first 20 chars):", token.substring(0, 20) + "...");
                
                cookies.get("peoples") || cookies.set("peoples", token, { path: '/' });
                
                console.log("🍪 Access token saved in cookies");
                
                localStorage.setItem('user', JSON.stringify(user));
                
            } catch (error) {
                console.error("❌ Error parsing data:", error);
            }
        } else {
            console.error("❌ Missing authentication data");
        }
    }, [location.search, cookies]);

    return <h1>Authenticating...</h1>;
}