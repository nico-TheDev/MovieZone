const getRuntime = (time) => {
    if (time) {
        // const hour = Math.floor(time / 60);
        // const minutes = Math.ceil(((time/60) - 3));
        // return `${hour}h ${minutes}m`; 
        return time + ' min';
    }else{
        return 'No data';
    }
};

export default getRuntime;