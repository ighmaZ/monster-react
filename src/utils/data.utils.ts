 export const getData = async<T>( url: string): Promise<T> => {   // since it returns promise , <T> is generic

    const response = await fetch(url);
    return await response.json();
 }

