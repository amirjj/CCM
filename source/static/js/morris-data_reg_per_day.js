Morris.Area({
    element: 'morris-area-chart_reg_per_day',
    data: (function () {
        var request = new XMLHttpRequest();
        request.open("GET", 'regperday', false);
        var arr = [];

        request.onload = function () {
            var res = request.response;
            res = res.split('\n');
            for (var i = 0; i < res.length - 1; i++) {
                console.log(res[i]);
                var line = res[i];
                var msisdn = line.split(",")[0];
                var count = parseInt(line.split(",")[1]);
                var amount = line.split(",")[1];
                console.log(count);
                var threshold = 10;
                var len = i;
                var dictionary = {leng: len, msisdn: msisdn, count: count, serial: amount, threshold: threshold};
                arr.push(dictionary);

            }
        };

        request.send();

        console.log("############################1111111111111111111111111111########");
        console.log(arr);

        return arr;

    })(),


    // xkey: 'period',
    xkey: 'leng',
    // ykeys: ['iphone', 'ipad', 'itouch'],
    ykeys: ['count'],
    labels: ['Dif of SIMC and activ. date'],
    pointSize: 3,
    fillOpacity: 0,
    pointStrokeColors: ['#00bfc7', '#fdc006', '#9675ce'],
    behaveLikeLine: false,
    gridLineColor: '#e0e0e0',
    lineWidth: 1,
    hideHover: 'auto',
    lineColors: ['#00bfc7'],
    resize: true

});

//
// // Dashboard 1 Morris-chart
// var line = new Morris.Line({
//     element: 'morris-line-chart',
//     resize: true,
//
//
//     data: (function () {
//         var request = new XMLHttpRequest();
//         request.open("GET", 'getvoucherused', false);
//         var arr = [];
//
//         request.onload = function () {
//             // console.log("amiiiiiiiiiiiiiiiiiiiiiiiiiiiiiirr");
//
//             var res = request.response;
//             res = res.split('\n');
//             for (var i = 0; i < res.length - 1; i++) {
//                 // console.log(res[i]);
//                 var line = res[i];
//                 var msisdn = line.split(",")[0];
//                 var count = parseInt(line.split(",")[1]);
//                 var threshold = 10;
//                 var len = i + 1;
//                 var dictionary = {leng: len, msisdn: msisdn, count: count, threshold: threshold};
//                 arr.push(dictionary);
//
//
//             }
//
//
//         };
//
//         request.send();
//
//         var ali = [{
//             period: '7',
//             count: 10,
//             threshold: 10,
//         }, {
//             period: "5",
//             count: 30,
//             threshold: 10,
//         }, {
//             period: '6',
//             count: 20,
//             threshold: 10,
//         }];
//
//         // setTimeout(function () {
//         console.log(ali);
//
//         console.log("####################################");
//         console.log(arr.length);
//         console.log(arr);
//         // return arr;
//
//         // console.log(ali.length);
//
//
//         return arr;
//
//
//     })(),
//
//
//     // data: [
//     //   {y: '2011 Q1', item1: 2666},
//     //   {y: '2011 Q2', item1: 2778},
//     //   {y: '2011 Q3', item1: 4912},
//     //   {y: '2011 Q4', item1: 3767},
//     //   {y: '2012 Q1', item1: 6810},
//     //   {y: '2012 Q2', item1: 5670},
//     //   {y: '2012 Q3', item1: 4820},
//     //   {y: '2012 Q4', item1: 15073},
//     //   {y: '2013 Q1', item1: 10687},
//     //   {y: '2013 Q2', item1: 8432}
//     // ],
//     //
//
//
//     xkey: 'leng',
//     // xkey: 'y',
//     ykeys: ['count'],
//     // ykeys: ['item1'],
//     labels: ['count'],
//     // labels: ['Item 1'],
//     gridLineColor: '#eef0f2',
//     lineColors: ['#a3a4a9'],
//     lineWidth: 1,
//     hideHover: 'auto'
// });
// //
// // Morris.Area({
// //     element: 'morris-area-chart',
// //     data: [{
// //         period: '2010',
// //         iphone: 50,
// //         ipad: 80,
// //         itouch: 20
// //     }, {
// //         period: '2011',
// //         iphone: 130,
// //         ipad: 100,
// //         itouch: 80
// //     }, {
// //         period: '2012',
// //         iphone: 80,
// //         ipad: 60,
// //         itouch: 70
// //     }, {
// //         period: '2013',
// //         iphone: 70,
// //         ipad: 200,
// //         itouch: 140
// //     }, {
// //         period: '2014',
// //         iphone: 180,
// //         ipad: 150,
// //         itouch: 140
// //     }, {
// //         period: '2015',
// //         iphone: 105,
// //         ipad: 100,
// //         itouch: 80
// //     },
// //         {
// //             period: '2016',
// //             iphone: 250,
// //             ipad: 150,
// //             itouch: 200
// //         }],
// //     xkey: 'period',
// //     ykeys: ['iphone', 'ipad', 'itouch'],
// //     labels: ['iPhone', 'iPad', 'iPod Touch'],
// //     pointSize: 3,
// //     fillOpacity: 0,
// //     pointStrokeColors: ['#00bfc7', '#fdc006', '#9675ce'],
// //     behaveLikeLine: true,
// //     gridLineColor: '#e0e0e0',
// //     lineWidth: 1,
// //     hideHover: 'auto',
// //     lineColors: ['#00bfc7', '#fdc006', '#9675ce'],
// //     resize: true
// //
// // });
//
// Morris.Area({
//     element: 'morris-area-chart2',
//     data: [{
//         period: '2010',
//         SiteA: 0,
//         SiteB: 0,
//
//     }, {
//         period: '2011',
//         SiteA: 130,
//         SiteB: 100,
//
//     }, {
//         period: '2012',
//         SiteA: 80,
//         SiteB: 60,
//
//     }, {
//         period: '2013',
//         SiteA: 70,
//         SiteB: 200,
//
//     }, {
//         period: '2014',
//         SiteA: 180,
//         SiteB: 150,
//
//     }, {
//         period: '2015',
//         SiteA: 105,
//         SiteB: 90,
//
//     },
//         {
//             period: '2016',
//             SiteA: 250,
//             SiteB: 150,
//
//         }],
//     xkey: 'period',
//     ykeys: ['SiteA', 'SiteB'],
//     labels: ['Site A', 'Site B'],
//     pointSize: 0,
//     fillOpacity: 0.4,
//     pointStrokeColors: ['#b4becb', '#01c0c8'],
//     behaveLikeLine: true,
//     gridLineColor: '#e0e0e0',
//     lineWidth: 0,
//     smooth: false,
//     hideHover: 'auto',
//     lineColors: ['#b4becb', '#01c0c8'],
//     resize: true
//
// });
//
//
// // LINE CHART
//
// // Morris donut chart
//
// Morris.Donut({
//     element: 'morris-donut-chart',
//     data: [{
//         label: "Download Sales",
//         value: 12,
//
//     }, {
//         label: "In-Store Sales",
//         value: 30
//     }, {
//         label: "Mail-Order Sales",
//         value: 20
//     }],
//     resize: true,
//     colors: ['#99d683', '#13dafe', '#6164c1']
// });
//
// // Morris bar chart
// Morris.Bar({
//     element: 'morris-bar-chart',
//     data: [{
//         y: '2006',
//         a: 100,
//         b: 90,
//         c: 60
//     }, {
//         y: '2007',
//         a: 75,
//         b: 65,
//         c: 40
//     }, {
//         y: '2008',
//         a: 50,
//         b: 40,
//         c: 30
//     }, {
//         y: '2009',
//         a: 75,
//         b: 65,
//         c: 40
//     }, {
//         y: '2010',
//         a: 50,
//         b: 40,
//         c: 30
//     }, {
//         y: '2011',
//         a: 75,
//         b: 65,
//         c: 40
//     }, {
//         y: '2012',
//         a: 100,
//         b: 90,
//         c: 40
//     }],
//     xkey: 'y',
//     ykeys: ['a', 'b', 'c'],
//     labels: ['A', 'B', 'C'],
//     barColors: ['#b8edf0', '#b4c1d7', '#fcc9ba'],
//     hideHover: 'auto',
//     gridLineColor: '#eef0f2',
//     resize: true
// });
// // Extra chart
// Morris.Area({
//     element: 'extra-area-chart',
//     data: [{
//         period: '2010',
//         iphone: 0,
//         ipad: 0,
//         itouch: 0
//     }, {
//         period: '2011',
//         iphone: 50,
//         ipad: 15,
//         itouch: 5
//     }, {
//         period: '2012',
//         iphone: 20,
//         ipad: 50,
//         itouch: 65
//     }, {
//         period: '2013',
//         iphone: 60,
//         ipad: 12,
//         itouch: 7
//     }, {
//         period: '2014',
//         iphone: 30,
//         ipad: 20,
//         itouch: 120
//     }, {
//         period: '2015',
//         iphone: 25,
//         ipad: 80,
//         itouch: 40
//     }, {
//         period: '2016',
//         iphone: 10,
//         ipad: 10,
//         itouch: 10
//     }
//
//
//     ],
//     lineColors: ['#fb9678', '#01c0c8', '#8698b7'],
//     xkey: 'period',
//     ykeys: ['iphone', 'ipad', 'itouch'],
//     labels: ['Site A', 'Site B', 'Site C'],
//     pointSize: 0,
//     lineWidth: 0,
//     resize: true,
//     fillOpacity: 0.8,
//     behaveLikeLine: true,
//     gridLineColor: '#e0e0e0',
//     hideHover: 'auto'
//
// });