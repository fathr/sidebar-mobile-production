/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 400.0, "minX": 0.0, "maxY": 18284.0, "series": [{"data": [[0.0, 400.0], [0.1, 400.0], [0.2, 490.0], [0.3, 517.0], [0.4, 563.0], [0.5, 563.0], [0.6, 665.0], [0.7, 697.0], [0.8, 699.0], [0.9, 699.0], [1.0, 705.0], [1.1, 745.0], [1.2, 767.0], [1.3, 767.0], [1.4, 775.0], [1.5, 829.0], [1.6, 867.0], [1.7, 886.0], [1.8, 886.0], [1.9, 897.0], [2.0, 899.0], [2.1, 938.0], [2.2, 938.0], [2.3, 967.0], [2.4, 976.0], [2.5, 977.0], [2.6, 977.0], [2.7, 984.0], [2.8, 1031.0], [2.9, 1038.0], [3.0, 1038.0], [3.1, 1039.0], [3.2, 1067.0], [3.3, 1099.0], [3.4, 1122.0], [3.5, 1122.0], [3.6, 1223.0], [3.7, 1261.0], [3.8, 1347.0], [3.9, 1347.0], [4.0, 1375.0], [4.1, 1391.0], [4.2, 1416.0], [4.3, 1416.0], [4.4, 1417.0], [4.5, 1427.0], [4.6, 1431.0], [4.7, 1440.0], [4.8, 1440.0], [4.9, 1451.0], [5.0, 1455.0], [5.1, 1478.0], [5.2, 1478.0], [5.3, 1499.0], [5.4, 1514.0], [5.5, 1522.0], [5.6, 1522.0], [5.7, 1537.0], [5.8, 1553.0], [5.9, 1573.0], [6.0, 1573.0], [6.1, 1599.0], [6.2, 1603.0], [6.3, 1615.0], [6.4, 1690.0], [6.5, 1690.0], [6.6, 1742.0], [6.7, 1762.0], [6.8, 1791.0], [6.9, 1791.0], [7.0, 1813.0], [7.1, 1822.0], [7.2, 1860.0], [7.3, 1860.0], [7.4, 1873.0], [7.5, 1906.0], [7.6, 1916.0], [7.7, 1916.0], [7.8, 1937.0], [7.9, 1988.0], [8.0, 1997.0], [8.1, 2087.0], [8.2, 2087.0], [8.3, 2109.0], [8.4, 2112.0], [8.5, 2154.0], [8.6, 2154.0], [8.7, 2177.0], [8.8, 2200.0], [8.9, 2203.0], [9.0, 2203.0], [9.1, 2213.0], [9.2, 2242.0], [9.3, 2253.0], [9.4, 2288.0], [9.5, 2288.0], [9.6, 2368.0], [9.7, 2410.0], [9.8, 2444.0], [9.9, 2444.0], [10.0, 2489.0], [10.1, 2493.0], [10.2, 2500.0], [10.3, 2500.0], [10.4, 2517.0], [10.5, 2519.0], [10.6, 2529.0], [10.7, 2529.0], [10.8, 2557.0], [10.9, 2568.0], [11.0, 2577.0], [11.1, 2612.0], [11.2, 2612.0], [11.3, 2684.0], [11.4, 2706.0], [11.5, 2715.0], [11.6, 2715.0], [11.7, 2724.0], [11.8, 2732.0], [11.9, 2736.0], [12.0, 2736.0], [12.1, 2816.0], [12.2, 2833.0], [12.3, 2875.0], [12.4, 2875.0], [12.5, 2883.0], [12.6, 2914.0], [12.7, 2929.0], [12.8, 2930.0], [12.9, 2930.0], [13.0, 2936.0], [13.1, 2943.0], [13.2, 2965.0], [13.3, 2965.0], [13.4, 2980.0], [13.5, 2988.0], [13.6, 2990.0], [13.7, 2990.0], [13.8, 3000.0], [13.9, 3095.0], [14.0, 3096.0], [14.1, 3147.0], [14.2, 3147.0], [14.3, 3259.0], [14.4, 3260.0], [14.5, 3268.0], [14.6, 3268.0], [14.7, 3287.0], [14.8, 3326.0], [14.9, 3347.0], [15.0, 3347.0], [15.1, 3425.0], [15.2, 3450.0], [15.3, 3492.0], [15.4, 3492.0], [15.5, 3493.0], [15.6, 3495.0], [15.7, 3497.0], [15.8, 3525.0], [15.9, 3525.0], [16.0, 3528.0], [16.1, 3536.0], [16.2, 3569.0], [16.3, 3569.0], [16.4, 3619.0], [16.5, 3644.0], [16.6, 3661.0], [16.7, 3661.0], [16.8, 3679.0], [16.9, 3707.0], [17.0, 3730.0], [17.1, 3730.0], [17.2, 3738.0], [17.3, 3739.0], [17.4, 3754.0], [17.5, 3786.0], [17.6, 3786.0], [17.7, 3845.0], [17.8, 3873.0], [17.9, 3940.0], [18.0, 3940.0], [18.1, 3947.0], [18.2, 3997.0], [18.3, 4047.0], [18.4, 4047.0], [18.5, 4068.0], [18.6, 4072.0], [18.7, 4079.0], [18.8, 4111.0], [18.9, 4111.0], [19.0, 4112.0], [19.1, 4126.0], [19.2, 4137.0], [19.3, 4137.0], [19.4, 4143.0], [19.5, 4158.0], [19.6, 4221.0], [19.7, 4221.0], [19.8, 4248.0], [19.9, 4308.0], [20.0, 4351.0], [20.1, 4351.0], [20.2, 4398.0], [20.3, 4434.0], [20.4, 4444.0], [20.5, 4470.0], [20.6, 4470.0], [20.7, 4503.0], [20.8, 4518.0], [20.9, 4536.0], [21.0, 4536.0], [21.1, 4552.0], [21.2, 4581.0], [21.3, 4640.0], [21.4, 4640.0], [21.5, 4674.0], [21.6, 4704.0], [21.7, 4707.0], [21.8, 4707.0], [21.9, 4745.0], [22.0, 4747.0], [22.1, 4784.0], [22.2, 4832.0], [22.3, 4832.0], [22.4, 4850.0], [22.5, 4882.0], [22.6, 4938.0], [22.7, 4938.0], [22.8, 4940.0], [22.9, 5076.0], [23.0, 5083.0], [23.1, 5083.0], [23.2, 5106.0], [23.3, 5142.0], [23.4, 5147.0], [23.5, 5179.0], [23.6, 5179.0], [23.7, 5190.0], [23.8, 5194.0], [23.9, 5225.0], [24.0, 5225.0], [24.1, 5236.0], [24.2, 5251.0], [24.3, 5259.0], [24.4, 5259.0], [24.5, 5260.0], [24.6, 5299.0], [24.7, 5317.0], [24.8, 5317.0], [24.9, 5340.0], [25.0, 5340.0], [25.1, 5401.0], [25.2, 5409.0], [25.3, 5409.0], [25.4, 5430.0], [25.5, 5438.0], [25.6, 5447.0], [25.7, 5447.0], [25.8, 5454.0], [25.9, 5475.0], [26.0, 5486.0], [26.1, 5486.0], [26.2, 5564.0], [26.3, 5580.0], [26.4, 5600.0], [26.5, 5600.0], [26.6, 5611.0], [26.7, 5636.0], [26.8, 5651.0], [26.9, 5664.0], [27.0, 5664.0], [27.1, 5673.0], [27.2, 5702.0], [27.3, 5727.0], [27.4, 5727.0], [27.5, 5743.0], [27.6, 5771.0], [27.7, 5778.0], [27.8, 5778.0], [27.9, 5779.0], [28.0, 5786.0], [28.1, 5802.0], [28.2, 5835.0], [28.3, 5835.0], [28.4, 5840.0], [28.5, 5843.0], [28.6, 5851.0], [28.7, 5851.0], [28.8, 5857.0], [28.9, 5881.0], [29.0, 5898.0], [29.1, 5898.0], [29.2, 5915.0], [29.3, 5950.0], [29.4, 5954.0], [29.5, 5954.0], [29.6, 5961.0], [29.7, 5997.0], [29.8, 6019.0], [29.9, 6095.0], [30.0, 6095.0], [30.1, 6124.0], [30.2, 6222.0], [30.3, 6266.0], [30.4, 6266.0], [30.5, 6325.0], [30.6, 6330.0], [30.7, 6333.0], [30.8, 6333.0], [30.9, 6339.0], [31.0, 6349.0], [31.1, 6369.0], [31.2, 6369.0], [31.3, 6395.0], [31.4, 6405.0], [31.5, 6406.0], [31.6, 6417.0], [31.7, 6417.0], [31.8, 6437.0], [31.9, 6458.0], [32.0, 6512.0], [32.1, 6512.0], [32.2, 6527.0], [32.3, 6568.0], [32.4, 6612.0], [32.5, 6612.0], [32.6, 6734.0], [32.7, 6747.0], [32.8, 6752.0], [32.9, 6764.0], [33.0, 6764.0], [33.1, 6805.0], [33.2, 6831.0], [33.3, 6859.0], [33.4, 6859.0], [33.5, 6951.0], [33.6, 6973.0], [33.7, 6998.0], [33.8, 6998.0], [33.9, 7038.0], [34.0, 7061.0], [34.1, 7085.0], [34.2, 7085.0], [34.3, 7172.0], [34.4, 7178.0], [34.5, 7183.0], [34.6, 7213.0], [34.7, 7213.0], [34.8, 7216.0], [34.9, 7305.0], [35.0, 7309.0], [35.1, 7309.0], [35.2, 7388.0], [35.3, 7402.0], [35.4, 7404.0], [35.5, 7404.0], [35.6, 7405.0], [35.7, 7454.0], [35.8, 7520.0], [35.9, 7520.0], [36.0, 7523.0], [36.1, 7553.0], [36.2, 7586.0], [36.3, 7586.0], [36.4, 7586.0], [36.5, 7631.0], [36.6, 7633.0], [36.7, 7700.0], [36.8, 7700.0], [36.9, 7720.0], [37.0, 7721.0], [37.1, 7724.0], [37.2, 7724.0], [37.3, 7744.0], [37.4, 7762.0], [37.5, 7763.0], [37.6, 7764.0], [37.7, 7764.0], [37.8, 7774.0], [37.9, 7777.0], [38.0, 7782.0], [38.1, 7782.0], [38.2, 7784.0], [38.3, 7789.0], [38.4, 7832.0], [38.5, 7832.0], [38.6, 7853.0], [38.7, 7880.0], [38.8, 7885.0], [38.9, 7885.0], [39.0, 7890.0], [39.1, 7920.0], [39.2, 7922.0], [39.3, 7928.0], [39.4, 7928.0], [39.5, 7936.0], [39.6, 7940.0], [39.7, 7941.0], [39.8, 7941.0], [39.9, 8018.0], [40.0, 8022.0], [40.1, 8031.0], [40.2, 8031.0], [40.3, 8032.0], [40.4, 8036.0], [40.5, 8070.0], [40.6, 8070.0], [40.7, 8105.0], [40.8, 8122.0], [40.9, 8125.0], [41.0, 8139.0], [41.1, 8139.0], [41.2, 8147.0], [41.3, 8152.0], [41.4, 8162.0], [41.5, 8162.0], [41.6, 8210.0], [41.7, 8218.0], [41.8, 8219.0], [41.9, 8219.0], [42.0, 8277.0], [42.1, 8340.0], [42.2, 8342.0], [42.3, 8368.0], [42.4, 8368.0], [42.5, 8387.0], [42.6, 8394.0], [42.7, 8400.0], [42.8, 8400.0], [42.9, 8403.0], [43.0, 8406.0], [43.1, 8434.0], [43.2, 8434.0], [43.3, 8436.0], [43.4, 8480.0], [43.5, 8509.0], [43.6, 8509.0], [43.7, 8546.0], [43.8, 8562.0], [43.9, 8609.0], [44.0, 8649.0], [44.1, 8649.0], [44.2, 8668.0], [44.3, 8671.0], [44.4, 8674.0], [44.5, 8674.0], [44.6, 8691.0], [44.7, 8809.0], [44.8, 8820.0], [44.9, 8820.0], [45.0, 8825.0], [45.1, 8850.0], [45.2, 8869.0], [45.3, 8869.0], [45.4, 8891.0], [45.5, 8898.0], [45.6, 8900.0], [45.7, 8900.0], [45.8, 8900.0], [45.9, 8929.0], [46.0, 8949.0], [46.1, 8953.0], [46.2, 8953.0], [46.3, 8955.0], [46.4, 8972.0], [46.5, 9000.0], [46.6, 9000.0], [46.7, 9043.0], [46.8, 9046.0], [46.9, 9058.0], [47.0, 9092.0], [47.1, 9092.0], [47.2, 9116.0], [47.3, 9190.0], [47.4, 9198.0], [47.5, 9198.0], [47.6, 9200.0], [47.7, 9255.0], [47.8, 9268.0], [47.9, 9268.0], [48.0, 9278.0], [48.1, 9302.0], [48.2, 9321.0], [48.3, 9321.0], [48.4, 9342.0], [48.5, 9385.0], [48.6, 9386.0], [48.7, 9394.0], [48.8, 9394.0], [48.9, 9396.0], [49.0, 9398.0], [49.1, 9405.0], [49.2, 9405.0], [49.3, 9427.0], [49.4, 9447.0], [49.5, 9547.0], [49.6, 9547.0], [49.7, 9547.0], [49.8, 9551.0], [49.9, 9562.0], [50.0, 9562.0], [50.1, 9566.0], [50.2, 9574.0], [50.3, 9591.0], [50.4, 9594.0], [50.5, 9594.0], [50.6, 9638.0], [50.7, 9643.0], [50.8, 9652.0], [50.9, 9652.0], [51.0, 9708.0], [51.1, 9713.0], [51.2, 9719.0], [51.3, 9719.0], [51.4, 9729.0], [51.5, 9732.0], [51.6, 9770.0], [51.7, 9775.0], [51.8, 9775.0], [51.9, 9809.0], [52.0, 9887.0], [52.1, 9887.0], [52.2, 9887.0], [52.3, 9911.0], [52.4, 9943.0], [52.5, 9951.0], [52.6, 9951.0], [52.7, 9998.0], [52.8, 10000.0], [52.9, 10045.0], [53.0, 10045.0], [53.1, 10058.0], [53.2, 10072.0], [53.3, 10112.0], [53.4, 10115.0], [53.5, 10115.0], [53.6, 10153.0], [53.7, 10155.0], [53.8, 10170.0], [53.9, 10170.0], [54.0, 10228.0], [54.1, 10230.0], [54.2, 10261.0], [54.3, 10261.0], [54.4, 10304.0], [54.5, 10322.0], [54.6, 10334.0], [54.7, 10341.0], [54.8, 10341.0], [54.9, 10343.0], [55.0, 10344.0], [55.1, 10347.0], [55.2, 10347.0], [55.3, 10381.0], [55.4, 10390.0], [55.5, 10407.0], [55.6, 10407.0], [55.7, 10430.0], [55.8, 10444.0], [55.9, 10455.0], [56.0, 10455.0], [56.1, 10462.0], [56.2, 10466.0], [56.3, 10474.0], [56.4, 10497.0], [56.5, 10497.0], [56.6, 10511.0], [56.7, 10516.0], [56.8, 10522.0], [56.9, 10522.0], [57.0, 10546.0], [57.1, 10566.0], [57.2, 10630.0], [57.3, 10630.0], [57.4, 10668.0], [57.5, 10700.0], [57.6, 10707.0], [57.7, 10707.0], [57.8, 10726.0], [57.9, 10732.0], [58.0, 10747.0], [58.1, 10763.0], [58.2, 10763.0], [58.3, 10766.0], [58.4, 10769.0], [58.5, 10783.0], [58.6, 10783.0], [58.7, 10787.0], [58.8, 10802.0], [58.9, 10820.0], [59.0, 10820.0], [59.1, 10841.0], [59.2, 10866.0], [59.3, 10884.0], [59.4, 10895.0], [59.5, 10895.0], [59.6, 10906.0], [59.7, 10908.0], [59.8, 10922.0], [59.9, 10922.0], [60.0, 10925.0], [60.1, 10928.0], [60.2, 10980.0], [60.3, 10980.0], [60.4, 11001.0], [60.5, 11022.0], [60.6, 11028.0], [60.7, 11028.0], [60.8, 11038.0], [60.9, 11071.0], [61.0, 11078.0], [61.1, 11099.0], [61.2, 11099.0], [61.3, 11104.0], [61.4, 11142.0], [61.5, 11151.0], [61.6, 11151.0], [61.7, 11153.0], [61.8, 11159.0], [61.9, 11205.0], [62.0, 11205.0], [62.1, 11278.0], [62.2, 11309.0], [62.3, 11319.0], [62.4, 11319.0], [62.5, 11330.0], [62.6, 11341.0], [62.7, 11346.0], [62.8, 11357.0], [62.9, 11357.0], [63.0, 11368.0], [63.1, 11387.0], [63.2, 11392.0], [63.3, 11392.0], [63.4, 11397.0], [63.5, 11399.0], [63.6, 11419.0], [63.7, 11419.0], [63.8, 11437.0], [63.9, 11453.0], [64.0, 11456.0], [64.1, 11461.0], [64.2, 11461.0], [64.3, 11492.0], [64.4, 11512.0], [64.5, 11517.0], [64.6, 11517.0], [64.7, 11542.0], [64.8, 11556.0], [64.9, 11583.0], [65.0, 11583.0], [65.1, 11589.0], [65.2, 11622.0], [65.3, 11657.0], [65.4, 11657.0], [65.5, 11659.0], [65.6, 11661.0], [65.7, 11707.0], [65.8, 11756.0], [65.9, 11756.0], [66.0, 11758.0], [66.1, 11786.0], [66.2, 11791.0], [66.3, 11791.0], [66.4, 11800.0], [66.5, 11801.0], [66.6, 11801.0], [66.7, 11801.0], [66.8, 11802.0], [66.9, 11803.0], [67.0, 11822.0], [67.1, 11822.0], [67.2, 11833.0], [67.3, 11875.0], [67.4, 11891.0], [67.5, 11911.0], [67.6, 11911.0], [67.7, 11938.0], [67.8, 11977.0], [67.9, 11994.0], [68.0, 11994.0], [68.1, 11996.0], [68.2, 12004.0], [68.3, 12006.0], [68.4, 12006.0], [68.5, 12014.0], [68.6, 12016.0], [68.7, 12021.0], [68.8, 12025.0], [68.9, 12025.0], [69.0, 12036.0], [69.1, 12040.0], [69.2, 12063.0], [69.3, 12063.0], [69.4, 12076.0], [69.5, 12083.0], [69.6, 12094.0], [69.7, 12094.0], [69.8, 12101.0], [69.9, 12118.0], [70.0, 12124.0], [70.1, 12124.0], [70.2, 12141.0], [70.3, 12189.0], [70.4, 12200.0], [70.5, 12202.0], [70.6, 12202.0], [70.7, 12228.0], [70.8, 12257.0], [70.9, 12258.0], [71.0, 12258.0], [71.1, 12260.0], [71.2, 12282.0], [71.3, 12285.0], [71.4, 12285.0], [71.5, 12324.0], [71.6, 12334.0], [71.7, 12343.0], [71.8, 12343.0], [71.9, 12346.0], [72.0, 12373.0], [72.1, 12374.0], [72.2, 12389.0], [72.3, 12389.0], [72.4, 12396.0], [72.5, 12432.0], [72.6, 12463.0], [72.7, 12463.0], [72.8, 12469.0], [72.9, 12473.0], [73.0, 12482.0], [73.1, 12482.0], [73.2, 12494.0], [73.3, 12498.0], [73.4, 12506.0], [73.5, 12506.0], [73.6, 12506.0], [73.7, 12509.0], [73.8, 12526.0], [73.9, 12541.0], [74.0, 12541.0], [74.1, 12546.0], [74.2, 12568.0], [74.3, 12585.0], [74.4, 12585.0], [74.5, 12589.0], [74.6, 12615.0], [74.7, 12654.0], [74.8, 12654.0], [74.9, 12684.0], [75.0, 12698.0], [75.1, 12711.0], [75.2, 12718.0], [75.3, 12718.0], [75.4, 12724.0], [75.5, 12739.0], [75.6, 12757.0], [75.7, 12757.0], [75.8, 12764.0], [75.9, 12767.0], [76.0, 12772.0], [76.1, 12772.0], [76.2, 12794.0], [76.3, 12795.0], [76.4, 12795.0], [76.5, 12795.0], [76.6, 12833.0], [76.7, 12834.0], [76.8, 12860.0], [76.9, 12872.0], [77.0, 12872.0], [77.1, 12873.0], [77.2, 12882.0], [77.3, 12902.0], [77.4, 12902.0], [77.5, 12922.0], [77.6, 12944.0], [77.7, 12950.0], [77.8, 12950.0], [77.9, 12969.0], [78.0, 12973.0], [78.1, 12989.0], [78.2, 13000.0], [78.3, 13000.0], [78.4, 13004.0], [78.5, 13008.0], [78.6, 13027.0], [78.7, 13027.0], [78.8, 13029.0], [78.9, 13040.0], [79.0, 13069.0], [79.1, 13069.0], [79.2, 13073.0], [79.3, 13076.0], [79.4, 13160.0], [79.5, 13160.0], [79.6, 13183.0], [79.7, 13201.0], [79.8, 13213.0], [79.9, 13214.0], [80.0, 13214.0], [80.1, 13229.0], [80.2, 13268.0], [80.3, 13280.0], [80.4, 13280.0], [80.5, 13293.0], [80.6, 13309.0], [80.7, 13318.0], [80.8, 13318.0], [80.9, 13342.0], [81.0, 13345.0], [81.1, 13353.0], [81.2, 13353.0], [81.3, 13358.0], [81.4, 13359.0], [81.5, 13370.0], [81.6, 13372.0], [81.7, 13372.0], [81.8, 13374.0], [81.9, 13376.0], [82.0, 13377.0], [82.1, 13377.0], [82.2, 13435.0], [82.3, 13446.0], [82.4, 13454.0], [82.5, 13454.0], [82.6, 13462.0], [82.7, 13472.0], [82.8, 13473.0], [82.9, 13474.0], [83.0, 13474.0], [83.1, 13475.0], [83.2, 13476.0], [83.3, 13495.0], [83.4, 13495.0], [83.5, 13515.0], [83.6, 13535.0], [83.7, 13536.0], [83.8, 13536.0], [83.9, 13554.0], [84.0, 13557.0], [84.1, 13570.0], [84.2, 13570.0], [84.3, 13573.0], [84.4, 13575.0], [84.5, 13576.0], [84.6, 13601.0], [84.7, 13601.0], [84.8, 13605.0], [84.9, 13607.0], [85.0, 13612.0], [85.1, 13612.0], [85.2, 13614.0], [85.3, 13632.0], [85.4, 13646.0], [85.5, 13646.0], [85.6, 13649.0], [85.7, 13667.0], [85.8, 13709.0], [85.9, 13709.0], [86.0, 13713.0], [86.1, 13721.0], [86.2, 13724.0], [86.3, 13736.0], [86.4, 13736.0], [86.5, 13779.0], [86.6, 13782.0], [86.7, 13810.0], [86.8, 13810.0], [86.9, 13811.0], [87.0, 13843.0], [87.1, 13849.0], [87.2, 13849.0], [87.3, 13851.0], [87.4, 13852.0], [87.5, 13869.0], [87.6, 13869.0], [87.7, 13869.0], [87.8, 13891.0], [87.9, 13907.0], [88.0, 13976.0], [88.1, 13976.0], [88.2, 14006.0], [88.3, 14014.0], [88.4, 14020.0], [88.5, 14020.0], [88.6, 14062.0], [88.7, 14085.0], [88.8, 14086.0], [88.9, 14086.0], [89.0, 14098.0], [89.1, 14103.0], [89.2, 14125.0], [89.3, 14130.0], [89.4, 14130.0], [89.5, 14144.0], [89.6, 14166.0], [89.7, 14186.0], [89.8, 14186.0], [89.9, 14195.0], [90.0, 14197.0], [90.1, 14203.0], [90.2, 14203.0], [90.3, 14208.0], [90.4, 14212.0], [90.5, 14217.0], [90.6, 14217.0], [90.7, 14225.0], [90.8, 14227.0], [90.9, 14236.0], [91.0, 14254.0], [91.1, 14254.0], [91.2, 14306.0], [91.3, 14313.0], [91.4, 14314.0], [91.5, 14314.0], [91.6, 14355.0], [91.7, 14372.0], [91.8, 14393.0], [91.9, 14393.0], [92.0, 14427.0], [92.1, 14459.0], [92.2, 14463.0], [92.3, 14500.0], [92.4, 14500.0], [92.5, 14524.0], [92.6, 14573.0], [92.7, 14578.0], [92.8, 14578.0], [92.9, 14590.0], [93.0, 14615.0], [93.1, 14661.0], [93.2, 14661.0], [93.3, 14662.0], [93.4, 14689.0], [93.5, 14695.0], [93.6, 14695.0], [93.7, 14730.0], [93.8, 14758.0], [93.9, 14763.0], [94.0, 14766.0], [94.1, 14766.0], [94.2, 14796.0], [94.3, 14818.0], [94.4, 14941.0], [94.5, 14941.0], [94.6, 14958.0], [94.7, 15019.0], [94.8, 15020.0], [94.9, 15020.0], [95.0, 15036.0], [95.1, 15082.0], [95.2, 15090.0], [95.3, 15090.0], [95.4, 15113.0], [95.5, 15131.0], [95.6, 15141.0], [95.7, 15157.0], [95.8, 15157.0], [95.9, 15167.0], [96.0, 15257.0], [96.1, 15269.0], [96.2, 15269.0], [96.3, 15448.0], [96.4, 15462.0], [96.5, 15486.0], [96.6, 15486.0], [96.7, 15563.0], [96.8, 15584.0], [96.9, 15730.0], [97.0, 15790.0], [97.1, 15790.0], [97.2, 15808.0], [97.3, 15999.0], [97.4, 16007.0], [97.5, 16007.0], [97.6, 16324.0], [97.7, 16399.0], [97.8, 16467.0], [97.9, 16467.0], [98.0, 16491.0], [98.1, 16496.0], [98.2, 16508.0], [98.3, 16508.0], [98.4, 16559.0], [98.5, 16603.0], [98.6, 16696.0], [98.7, 16705.0], [98.8, 16705.0], [98.9, 16823.0], [99.0, 16861.0], [99.1, 16872.0], [99.2, 16872.0], [99.3, 16875.0], [99.4, 17215.0], [99.5, 17720.0], [99.6, 17720.0], [99.7, 17876.0], [99.8, 18108.0], [99.9, 18284.0]], "isOverall": false, "label": "Kotak Masuk Perangkat Daerah UK", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 13.0, "series": [{"data": [[400.0, 2.0], [500.0, 2.0], [600.0, 3.0], [700.0, 4.0], [800.0, 5.0], [900.0, 5.0], [1000.0, 5.0], [1100.0, 1.0], [1200.0, 2.0], [1300.0, 3.0], [1400.0, 9.0], [1500.0, 6.0], [1600.0, 3.0], [1700.0, 3.0], [1800.0, 4.0], [1900.0, 5.0], [2000.0, 1.0], [2100.0, 4.0], [2200.0, 6.0], [2300.0, 1.0], [2400.0, 4.0], [2500.0, 7.0], [2600.0, 2.0], [2700.0, 5.0], [2800.0, 4.0], [2900.0, 9.0], [3000.0, 3.0], [3100.0, 1.0], [3300.0, 2.0], [3200.0, 4.0], [3400.0, 6.0], [3500.0, 4.0], [3700.0, 6.0], [3600.0, 4.0], [3800.0, 2.0], [3900.0, 3.0], [4000.0, 4.0], [4100.0, 6.0], [4200.0, 2.0], [4300.0, 3.0], [4400.0, 3.0], [4600.0, 2.0], [4500.0, 5.0], [4700.0, 5.0], [4800.0, 3.0], [4900.0, 2.0], [5100.0, 6.0], [5000.0, 2.0], [5200.0, 6.0], [5300.0, 3.0], [5600.0, 6.0], [5500.0, 2.0], [5400.0, 8.0], [5700.0, 7.0], [5800.0, 8.0], [5900.0, 5.0], [6000.0, 2.0], [6100.0, 1.0], [6200.0, 2.0], [6300.0, 7.0], [6500.0, 3.0], [6600.0, 1.0], [6400.0, 5.0], [6700.0, 4.0], [6800.0, 3.0], [6900.0, 3.0], [7100.0, 3.0], [7000.0, 3.0], [7400.0, 4.0], [7300.0, 3.0], [7200.0, 2.0], [7500.0, 5.0], [7600.0, 2.0], [7900.0, 6.0], [7700.0, 13.0], [7800.0, 5.0], [8000.0, 6.0], [8100.0, 7.0], [8200.0, 4.0], [8400.0, 6.0], [8600.0, 6.0], [8300.0, 5.0], [8500.0, 3.0], [9000.0, 5.0], [8900.0, 7.0], [8800.0, 7.0], [9100.0, 3.0], [9200.0, 4.0], [9700.0, 7.0], [9500.0, 8.0], [9300.0, 8.0], [9600.0, 3.0], [9400.0, 3.0], [9900.0, 4.0], [10000.0, 4.0], [10100.0, 5.0], [9800.0, 3.0], [10200.0, 3.0], [10700.0, 10.0], [10300.0, 9.0], [10500.0, 5.0], [10400.0, 8.0], [10600.0, 2.0], [11100.0, 5.0], [10800.0, 6.0], [10900.0, 6.0], [11000.0, 7.0], [11200.0, 2.0], [11600.0, 4.0], [11300.0, 11.0], [11400.0, 6.0], [11500.0, 6.0], [11700.0, 5.0], [12200.0, 8.0], [11800.0, 9.0], [12100.0, 5.0], [11900.0, 5.0], [12000.0, 12.0], [12500.0, 9.0], [12600.0, 4.0], [12700.0, 11.0], [12400.0, 7.0], [12300.0, 8.0], [12900.0, 7.0], [13300.0, 12.0], [13000.0, 9.0], [13200.0, 7.0], [12800.0, 6.0], [13100.0, 2.0], [13600.0, 9.0], [13800.0, 9.0], [13700.0, 7.0], [13500.0, 9.0], [13400.0, 10.0], [14000.0, 7.0], [13900.0, 2.0], [14100.0, 8.0], [14200.0, 8.0], [14300.0, 6.0], [14500.0, 5.0], [14400.0, 3.0], [14600.0, 5.0], [14700.0, 5.0], [14800.0, 1.0], [14900.0, 2.0], [15000.0, 5.0], [15100.0, 5.0], [15200.0, 2.0], [15500.0, 2.0], [15400.0, 3.0], [15800.0, 1.0], [15700.0, 2.0], [16000.0, 1.0], [16300.0, 2.0], [15900.0, 1.0], [16700.0, 1.0], [16800.0, 4.0], [16400.0, 3.0], [17200.0, 1.0], [16500.0, 2.0], [16600.0, 2.0], [17700.0, 1.0], [18200.0, 1.0], [18100.0, 1.0], [17800.0, 1.0]], "isOverall": false, "label": "Kotak Masuk Perangkat Daerah UK", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 718.0, "series": [{"data": [[0.0, 2.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 39.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 718.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 7.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 20.54271356783919, "minX": 1.65781134E12, "maxY": 64.1319648093842, "series": [{"data": [[1.65781134E12, 20.54271356783919], [1.65781146E12, 62.747787610619504], [1.6578114E12, 64.1319648093842]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65781146E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1588.8333333333335, "minX": 1.0, "maxY": 17876.0, "series": [{"data": [[2.0, 14730.0], [3.0, 1633.6666666666667], [4.0, 4494.875], [5.0, 2758.857142857143], [6.0, 3179.8571428571427], [7.0, 3575.8333333333335], [8.0, 4003.333333333333], [9.0, 3031.5], [10.0, 3208.8571428571427], [11.0, 1588.8333333333335], [12.0, 1729.75], [13.0, 5325.545454545454], [14.0, 4445.0], [15.0, 4002.7142857142853], [16.0, 5574.0], [17.0, 3846.0], [18.0, 4973.5], [19.0, 2595.0], [20.0, 8448.5], [21.0, 5499.833333333334], [22.0, 4179.866666666668], [23.0, 7880.0], [24.0, 5578.75], [25.0, 5634.0], [26.0, 6906.25], [27.0, 5616.285714285714], [28.0, 3424.0], [29.0, 8071.0], [30.0, 10178.5], [31.0, 5215.25], [32.0, 5603.571428571428], [33.0, 6419.833333333333], [34.0, 7514.75], [35.0, 6499.153846153848], [36.0, 5968.2], [37.0, 6171.5], [38.0, 7750.75], [39.0, 7424.0], [40.0, 6975.75], [41.0, 6122.9333333333325], [42.0, 6310.833333333334], [43.0, 7493.749999999999], [44.0, 6826.4], [45.0, 8016.0], [46.0, 9215.0], [47.0, 7800.333333333333], [48.0, 9310.0], [49.0, 9721.2], [50.0, 9315.615384615385], [51.0, 8770.153846153846], [52.0, 7085.5294117647045], [53.0, 7604.333333333333], [55.0, 8674.0], [54.0, 11387.0], [56.0, 7798.666666666667], [57.0, 8190.25], [58.0, 8371.142857142857], [59.0, 8781.444444444445], [60.0, 8775.25], [61.0, 9585.777777777777], [62.0, 10063.8], [63.0, 10572.57142857143], [64.0, 10430.666666666666], [65.0, 7635.571428571428], [66.0, 7773.75], [67.0, 7912.571428571428], [68.0, 8003.333333333333], [69.0, 9113.75], [70.0, 9864.0], [71.0, 11634.5], [72.0, 10116.75], [73.0, 11443.0], [74.0, 10500.72222222222], [75.0, 12474.836805555558], [1.0, 17876.0]], "isOverall": false, "label": "Kotak Masuk Perangkat Daerah UK", "isController": false}, {"data": [[52.39947780678852, 8967.950391644907]], "isOverall": false, "label": "Kotak Masuk Perangkat Daerah UK-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 75.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2729.616666666667, "minX": 1.65781134E12, "maxY": 78747.38333333333, "series": [{"data": [[1.65781134E12, 45962.36666666667], [1.65781146E12, 52329.71666666667], [1.6578114E12, 78747.38333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65781134E12, 2729.616666666667], [1.65781146E12, 3099.9666666666667], [1.6578114E12, 4677.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65781146E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3129.9949748743725, "minX": 1.65781134E12, "maxY": 12401.725663716814, "series": [{"data": [[1.65781134E12, 3129.9949748743725], [1.65781146E12, 12401.725663716814], [1.6578114E12, 10099.09384164222]], "isOverall": false, "label": "Kotak Masuk Perangkat Daerah UK", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65781146E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3118.4924623115585, "minX": 1.65781134E12, "maxY": 12384.668141592925, "series": [{"data": [[1.65781134E12, 3118.4924623115585], [1.65781146E12, 12384.668141592925], [1.6578114E12, 10090.422287390034]], "isOverall": false, "label": "Kotak Masuk Perangkat Daerah UK", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65781146E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 18.31964809384163, "minX": 1.65781134E12, "maxY": 31.713567839195992, "series": [{"data": [[1.65781134E12, 31.713567839195992], [1.65781146E12, 20.88053097345132], [1.6578114E12, 18.31964809384163]], "isOverall": false, "label": "Kotak Masuk Perangkat Daerah UK", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65781146E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 400.0, "minX": 1.65781134E12, "maxY": 18284.0, "series": [{"data": [[1.65781134E12, 7520.0], [1.65781146E12, 18284.0], [1.6578114E12, 17720.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65781134E12, 5340.0], [1.65781146E12, 14393.100000000002], [1.6578114E12, 14671.600000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65781134E12, 6764.0], [1.65781146E12, 18054.640000000003], [1.6578114E12, 16873.83]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65781134E12, 5997.0], [1.65781146E12, 15253.699999999999], [1.6578114E12, 15564.050000000001]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65781134E12, 400.0], [1.65781146E12, 7085.0], [1.6578114E12, 5083.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65781134E12, 2936.0], [1.65781146E12, 12877.5], [1.6578114E12, 9792.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65781146E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1083.0, "minX": 1.0, "maxY": 14306.0, "series": [{"data": [[8.0, 10285.0], [2.0, 7938.0], [9.0, 11417.0], [10.0, 9069.0], [11.0, 8326.0], [3.0, 7642.0], [12.0, 10491.0], [13.0, 14306.0], [14.0, 12622.0], [15.0, 5779.0], [1.0, 8949.0], [4.0, 8401.5], [16.0, 13337.0], [17.0, 11780.0], [19.0, 11419.0], [5.0, 7175.0], [21.0, 13454.0], [6.0, 1083.0], [27.0, 13353.0], [7.0, 2444.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 3829.5], [3.0, 3287.0], [27.0, 3380.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1073.5, "minX": 1.0, "maxY": 14285.0, "series": [{"data": [[8.0, 10277.5], [2.0, 7926.5], [9.0, 11409.0], [10.0, 9062.0], [11.0, 8315.5], [3.0, 7620.5], [12.0, 10480.0], [13.0, 14285.0], [14.0, 12614.0], [15.0, 5774.0], [1.0, 8942.0], [4.0, 8396.0], [16.0, 13326.5], [17.0, 11753.5], [19.0, 11412.0], [5.0, 7165.0], [21.0, 13428.0], [6.0, 1073.5], [27.0, 13348.0], [7.0, 2436.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[5.0, 3821.0], [3.0, 3277.0], [27.0, 3356.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.5166666666666666, "minX": 1.65781134E12, "maxY": 6.283333333333333, "series": [{"data": [[1.65781134E12, 3.966666666666667], [1.65781146E12, 2.5166666666666666], [1.6578114E12, 6.283333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65781146E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.65781134E12, "maxY": 5.633333333333334, "series": [{"data": [[1.65781134E12, 3.316666666666667], [1.65781146E12, 3.7], [1.6578114E12, 5.633333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.65781146E12, 0.06666666666666667], [1.6578114E12, 0.05]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65781146E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.65781134E12, "maxY": 5.633333333333334, "series": [{"data": [[1.65781134E12, 3.316666666666667], [1.65781146E12, 3.7], [1.6578114E12, 5.633333333333334]], "isOverall": false, "label": "Kotak Masuk Perangkat Daerah UK-success", "isController": false}, {"data": [[1.65781146E12, 0.06666666666666667], [1.6578114E12, 0.05]], "isOverall": false, "label": "Kotak Masuk Perangkat Daerah UK-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65781146E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.65781134E12, "maxY": 5.633333333333334, "series": [{"data": [[1.65781134E12, 3.316666666666667], [1.65781146E12, 3.7], [1.6578114E12, 5.633333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65781146E12, 0.06666666666666667], [1.6578114E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65781146E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

