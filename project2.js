setInterval(() => {
     date=new Date();
     dhour=date.getHours();
     dmin=date.getMinutes();
     dsec=date.getSeconds();
     hrot=30*(dhour)+dmin/2;
     mrot=6*dmin;
     srot=6*dsec;
     hour.style.transform=`rotate(${hrot}deg)`;
     minute.style.transform=`rotate(${mrot}deg)`;
     second.style.transform=`rotate(${srot}deg)`;
     
}, 1000);