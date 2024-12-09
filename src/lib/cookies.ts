// utils/cookies.ts

export const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Calcul de la date d'expiration
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`; // Définit le cookie
  };
  
  export const getCookie = (name: string): string | null => {
    const nameEq = name + "=";
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookies.split(";");
    
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i].trim();
      if (cookie.indexOf(nameEq) === 0) {
        return cookie.substring(nameEq.length, cookie.length); // Retourne la valeur du cookie
      }
    }
    return null;
  };
  