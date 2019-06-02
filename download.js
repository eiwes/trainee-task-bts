function createCsv() {
    var table = document.getElementById("table").innerHTML;
    var data = table.replace(/<thead>/g, '')
        .replace(/<\/thead>/g, '')
        .replace(/<tbody>/g, '')
        .replace(/<\/tbody>/g, '')
        .replace(/<tr>/g, '')
        .replace(/<\/tr>/g, '\r\n')
        .replace(/<th>/g, '')
        .replace(/<\/th>/g, ';')
        .replace(/<td>/g, '')
        .replace(/<\/td>/g, ';')
        .replace(/\t/g, '')
        .replace(/\n/g, '');
    var link = document.createElement('a');
    link.download = "data.csv";
    link.href = "data:application/csv," + escape(data);
    link.click();
}
function createTsv() {
    var table = document.getElementById("table").innerHTML;
    var data = table.replace(/<thead>/g, '')
        .replace(/<\/thead>/g, '')
        .replace(/<tbody>/g, '')
        .replace(/<\/tbody>/g, '')
        .replace(/<tr>/g, '')
        .replace(/<\/tr>/g, '\r\n')
        .replace(/<th>/g, '')
        .replace(/<\/th>/g, ';')
        .replace(/<td>/g, '')
        .replace(/<\/td>/g, ';')
        .replace(/\t/g, '')
        .replace(/\n/g, '');
    var link = document.createElement('a');
    link.download = "data.tsv";
    link.href = "data:application/tsv," + escape(data);
    link.click();
}