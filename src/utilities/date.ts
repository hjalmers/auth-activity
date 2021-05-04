export function formatDate(timestamp: number, format: string = 'D MMMM YYYY HH:mm:ss'): string {
    var d = new Date(+timestamp);
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var YYYY = d.getFullYear();
    var MMMM = months[d.getMonth()];
    var MM = (d.getMonth() < 10 ? '0' : '') + d.getMonth();
    var D = d.getDate();
    var DD = (d.getDate() < 10 ? '0' : '') + d.getDate();
    var HH = (d.getHours() < 10 ? '0' : '') + d.getHours();
    var mm = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    var ss = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();

    return format
        .replace(/DD/g, DD + '')
        .replace(/D/g, D + '')
        .replace(/MMMM/g, MMMM + '')
        .replace(/MM/g, MM + '')
        .replace(/YYYY/g, YYYY + '')
        .replace(/HH/g, HH + '')
        .replace(/mm/g, mm + '')
        .replace(/ss/g, ss + '');
}
