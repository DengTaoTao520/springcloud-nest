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
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 917.0, "series": [{"data": [[0.0, 15.0], [0.1, 16.0], [0.2, 16.0], [0.3, 16.0], [0.4, 22.0], [0.5, 35.0], [0.6, 36.0], [0.7, 36.0], [0.8, 37.0], [0.9, 42.0], [1.0, 42.0], [1.1, 42.0], [1.2, 43.0], [1.3, 44.0], [1.4, 44.0], [1.5, 45.0], [1.6, 46.0], [1.7, 46.0], [1.8, 48.0], [1.9, 48.0], [2.0, 52.0], [2.1, 53.0], [2.2, 54.0], [2.3, 54.0], [2.4, 54.0], [2.5, 55.0], [2.6, 56.0], [2.7, 56.0], [2.8, 56.0], [2.9, 58.0], [3.0, 60.0], [3.1, 60.0], [3.2, 62.0], [3.3, 62.0], [3.4, 62.0], [3.5, 63.0], [3.6, 63.0], [3.7, 63.0], [3.8, 64.0], [3.9, 64.0], [4.0, 67.0], [4.1, 68.0], [4.2, 68.0], [4.3, 68.0], [4.4, 69.0], [4.5, 69.0], [4.6, 70.0], [4.7, 71.0], [4.8, 71.0], [4.9, 71.0], [5.0, 71.0], [5.1, 79.0], [5.2, 83.0], [5.3, 84.0], [5.4, 86.0], [5.5, 86.0], [5.6, 86.0], [5.7, 87.0], [5.8, 88.0], [5.9, 88.0], [6.0, 88.0], [6.1, 90.0], [6.2, 91.0], [6.3, 91.0], [6.4, 91.0], [6.5, 93.0], [6.6, 94.0], [6.7, 94.0], [6.8, 94.0], [6.9, 94.0], [7.0, 95.0], [7.1, 95.0], [7.2, 96.0], [7.3, 98.0], [7.4, 98.0], [7.5, 99.0], [7.6, 100.0], [7.7, 101.0], [7.8, 101.0], [7.9, 102.0], [8.0, 102.0], [8.1, 102.0], [8.2, 103.0], [8.3, 103.0], [8.4, 103.0], [8.5, 103.0], [8.6, 104.0], [8.7, 105.0], [8.8, 105.0], [8.9, 105.0], [9.0, 107.0], [9.1, 107.0], [9.2, 108.0], [9.3, 108.0], [9.4, 109.0], [9.5, 109.0], [9.6, 109.0], [9.7, 110.0], [9.8, 110.0], [9.9, 112.0], [10.0, 117.0], [10.1, 117.0], [10.2, 118.0], [10.3, 122.0], [10.4, 124.0], [10.5, 125.0], [10.6, 125.0], [10.7, 126.0], [10.8, 129.0], [10.9, 131.0], [11.0, 131.0], [11.1, 131.0], [11.2, 132.0], [11.3, 133.0], [11.4, 133.0], [11.5, 134.0], [11.6, 134.0], [11.7, 135.0], [11.8, 135.0], [11.9, 136.0], [12.0, 136.0], [12.1, 137.0], [12.2, 138.0], [12.3, 139.0], [12.4, 140.0], [12.5, 140.0], [12.6, 142.0], [12.7, 145.0], [12.8, 145.0], [12.9, 146.0], [13.0, 146.0], [13.1, 146.0], [13.2, 147.0], [13.3, 147.0], [13.4, 148.0], [13.5, 150.0], [13.6, 154.0], [13.7, 154.0], [13.8, 158.0], [13.9, 158.0], [14.0, 160.0], [14.1, 160.0], [14.2, 160.0], [14.3, 160.0], [14.4, 161.0], [14.5, 161.0], [14.6, 162.0], [14.7, 163.0], [14.8, 163.0], [14.9, 165.0], [15.0, 165.0], [15.1, 165.0], [15.2, 165.0], [15.3, 166.0], [15.4, 166.0], [15.5, 166.0], [15.6, 167.0], [15.7, 168.0], [15.8, 169.0], [15.9, 171.0], [16.0, 172.0], [16.1, 172.0], [16.2, 172.0], [16.3, 173.0], [16.4, 173.0], [16.5, 173.0], [16.6, 174.0], [16.7, 174.0], [16.8, 174.0], [16.9, 175.0], [17.0, 175.0], [17.1, 176.0], [17.2, 176.0], [17.3, 177.0], [17.4, 178.0], [17.5, 180.0], [17.6, 181.0], [17.7, 181.0], [17.8, 181.0], [17.9, 181.0], [18.0, 182.0], [18.1, 182.0], [18.2, 182.0], [18.3, 183.0], [18.4, 183.0], [18.5, 184.0], [18.6, 184.0], [18.7, 184.0], [18.8, 184.0], [18.9, 185.0], [19.0, 185.0], [19.1, 185.0], [19.2, 185.0], [19.3, 187.0], [19.4, 187.0], [19.5, 187.0], [19.6, 187.0], [19.7, 188.0], [19.8, 188.0], [19.9, 188.0], [20.0, 188.0], [20.1, 188.0], [20.2, 188.0], [20.3, 189.0], [20.4, 189.0], [20.5, 189.0], [20.6, 189.0], [20.7, 189.0], [20.8, 190.0], [20.9, 191.0], [21.0, 192.0], [21.1, 192.0], [21.2, 193.0], [21.3, 194.0], [21.4, 195.0], [21.5, 196.0], [21.6, 196.0], [21.7, 196.0], [21.8, 196.0], [21.9, 196.0], [22.0, 198.0], [22.1, 198.0], [22.2, 199.0], [22.3, 201.0], [22.4, 201.0], [22.5, 203.0], [22.6, 203.0], [22.7, 204.0], [22.8, 204.0], [22.9, 205.0], [23.0, 206.0], [23.1, 206.0], [23.2, 206.0], [23.3, 207.0], [23.4, 207.0], [23.5, 207.0], [23.6, 207.0], [23.7, 207.0], [23.8, 207.0], [23.9, 207.0], [24.0, 208.0], [24.1, 208.0], [24.2, 208.0], [24.3, 208.0], [24.4, 208.0], [24.5, 209.0], [24.6, 209.0], [24.7, 209.0], [24.8, 209.0], [24.9, 209.0], [25.0, 209.0], [25.1, 210.0], [25.2, 210.0], [25.3, 210.0], [25.4, 210.0], [25.5, 210.0], [25.6, 210.0], [25.7, 210.0], [25.8, 210.0], [25.9, 211.0], [26.0, 211.0], [26.1, 211.0], [26.2, 211.0], [26.3, 211.0], [26.4, 211.0], [26.5, 211.0], [26.6, 211.0], [26.7, 211.0], [26.8, 211.0], [26.9, 212.0], [27.0, 212.0], [27.1, 212.0], [27.2, 212.0], [27.3, 212.0], [27.4, 212.0], [27.5, 212.0], [27.6, 212.0], [27.7, 213.0], [27.8, 213.0], [27.9, 213.0], [28.0, 213.0], [28.1, 213.0], [28.2, 213.0], [28.3, 213.0], [28.4, 213.0], [28.5, 213.0], [28.6, 213.0], [28.7, 214.0], [28.8, 214.0], [28.9, 214.0], [29.0, 214.0], [29.1, 214.0], [29.2, 214.0], [29.3, 214.0], [29.4, 214.0], [29.5, 214.0], [29.6, 215.0], [29.7, 215.0], [29.8, 215.0], [29.9, 215.0], [30.0, 215.0], [30.1, 216.0], [30.2, 216.0], [30.3, 216.0], [30.4, 216.0], [30.5, 216.0], [30.6, 216.0], [30.7, 217.0], [30.8, 217.0], [30.9, 217.0], [31.0, 217.0], [31.1, 217.0], [31.2, 217.0], [31.3, 217.0], [31.4, 217.0], [31.5, 217.0], [31.6, 218.0], [31.7, 218.0], [31.8, 218.0], [31.9, 218.0], [32.0, 218.0], [32.1, 218.0], [32.2, 218.0], [32.3, 218.0], [32.4, 218.0], [32.5, 218.0], [32.6, 218.0], [32.7, 218.0], [32.8, 218.0], [32.9, 218.0], [33.0, 218.0], [33.1, 218.0], [33.2, 218.0], [33.3, 218.0], [33.4, 219.0], [33.5, 219.0], [33.6, 219.0], [33.7, 219.0], [33.8, 219.0], [33.9, 219.0], [34.0, 219.0], [34.1, 220.0], [34.2, 220.0], [34.3, 220.0], [34.4, 220.0], [34.5, 220.0], [34.6, 221.0], [34.7, 221.0], [34.8, 221.0], [34.9, 221.0], [35.0, 221.0], [35.1, 221.0], [35.2, 221.0], [35.3, 222.0], [35.4, 222.0], [35.5, 222.0], [35.6, 222.0], [35.7, 222.0], [35.8, 222.0], [35.9, 223.0], [36.0, 223.0], [36.1, 223.0], [36.2, 223.0], [36.3, 223.0], [36.4, 223.0], [36.5, 223.0], [36.6, 223.0], [36.7, 223.0], [36.8, 223.0], [36.9, 223.0], [37.0, 223.0], [37.1, 223.0], [37.2, 223.0], [37.3, 224.0], [37.4, 224.0], [37.5, 224.0], [37.6, 224.0], [37.7, 224.0], [37.8, 224.0], [37.9, 224.0], [38.0, 224.0], [38.1, 224.0], [38.2, 224.0], [38.3, 224.0], [38.4, 224.0], [38.5, 224.0], [38.6, 225.0], [38.7, 225.0], [38.8, 225.0], [38.9, 225.0], [39.0, 225.0], [39.1, 225.0], [39.2, 225.0], [39.3, 225.0], [39.4, 225.0], [39.5, 225.0], [39.6, 225.0], [39.7, 225.0], [39.8, 226.0], [39.9, 226.0], [40.0, 226.0], [40.1, 226.0], [40.2, 226.0], [40.3, 226.0], [40.4, 226.0], [40.5, 226.0], [40.6, 227.0], [40.7, 227.0], [40.8, 227.0], [40.9, 227.0], [41.0, 227.0], [41.1, 227.0], [41.2, 227.0], [41.3, 227.0], [41.4, 228.0], [41.5, 228.0], [41.6, 228.0], [41.7, 228.0], [41.8, 229.0], [41.9, 229.0], [42.0, 229.0], [42.1, 229.0], [42.2, 231.0], [42.3, 232.0], [42.4, 234.0], [42.5, 236.0], [42.6, 237.0], [42.7, 238.0], [42.8, 241.0], [42.9, 241.0], [43.0, 242.0], [43.1, 243.0], [43.2, 243.0], [43.3, 243.0], [43.4, 243.0], [43.5, 243.0], [43.6, 243.0], [43.7, 244.0], [43.8, 244.0], [43.9, 244.0], [44.0, 246.0], [44.1, 246.0], [44.2, 246.0], [44.3, 246.0], [44.4, 246.0], [44.5, 247.0], [44.6, 247.0], [44.7, 247.0], [44.8, 247.0], [44.9, 248.0], [45.0, 248.0], [45.1, 249.0], [45.2, 249.0], [45.3, 249.0], [45.4, 249.0], [45.5, 249.0], [45.6, 249.0], [45.7, 249.0], [45.8, 249.0], [45.9, 249.0], [46.0, 249.0], [46.1, 249.0], [46.2, 250.0], [46.3, 250.0], [46.4, 250.0], [46.5, 250.0], [46.6, 250.0], [46.7, 250.0], [46.8, 250.0], [46.9, 250.0], [47.0, 250.0], [47.1, 251.0], [47.2, 251.0], [47.3, 251.0], [47.4, 251.0], [47.5, 251.0], [47.6, 251.0], [47.7, 251.0], [47.8, 251.0], [47.9, 251.0], [48.0, 251.0], [48.1, 251.0], [48.2, 251.0], [48.3, 251.0], [48.4, 252.0], [48.5, 252.0], [48.6, 252.0], [48.7, 252.0], [48.8, 252.0], [48.9, 252.0], [49.0, 252.0], [49.1, 252.0], [49.2, 252.0], [49.3, 252.0], [49.4, 252.0], [49.5, 253.0], [49.6, 253.0], [49.7, 253.0], [49.8, 253.0], [49.9, 253.0], [50.0, 253.0], [50.1, 253.0], [50.2, 253.0], [50.3, 253.0], [50.4, 254.0], [50.5, 254.0], [50.6, 254.0], [50.7, 254.0], [50.8, 254.0], [50.9, 254.0], [51.0, 254.0], [51.1, 254.0], [51.2, 255.0], [51.3, 255.0], [51.4, 255.0], [51.5, 255.0], [51.6, 255.0], [51.7, 256.0], [51.8, 256.0], [51.9, 256.0], [52.0, 256.0], [52.1, 256.0], [52.2, 256.0], [52.3, 256.0], [52.4, 256.0], [52.5, 257.0], [52.6, 257.0], [52.7, 258.0], [52.8, 259.0], [52.9, 259.0], [53.0, 259.0], [53.1, 259.0], [53.2, 259.0], [53.3, 259.0], [53.4, 260.0], [53.5, 261.0], [53.6, 261.0], [53.7, 261.0], [53.8, 261.0], [53.9, 262.0], [54.0, 263.0], [54.1, 263.0], [54.2, 263.0], [54.3, 264.0], [54.4, 264.0], [54.5, 267.0], [54.6, 269.0], [54.7, 275.0], [54.8, 275.0], [54.9, 275.0], [55.0, 276.0], [55.1, 277.0], [55.2, 277.0], [55.3, 285.0], [55.4, 287.0], [55.5, 291.0], [55.6, 292.0], [55.7, 296.0], [55.8, 298.0], [55.9, 300.0], [56.0, 300.0], [56.1, 300.0], [56.2, 301.0], [56.3, 301.0], [56.4, 303.0], [56.5, 303.0], [56.6, 304.0], [56.7, 304.0], [56.8, 308.0], [56.9, 309.0], [57.0, 309.0], [57.1, 309.0], [57.2, 309.0], [57.3, 309.0], [57.4, 310.0], [57.5, 310.0], [57.6, 311.0], [57.7, 311.0], [57.8, 312.0], [57.9, 312.0], [58.0, 312.0], [58.1, 314.0], [58.2, 314.0], [58.3, 314.0], [58.4, 314.0], [58.5, 318.0], [58.6, 322.0], [58.7, 323.0], [58.8, 332.0], [58.9, 332.0], [59.0, 332.0], [59.1, 332.0], [59.2, 332.0], [59.3, 332.0], [59.4, 334.0], [59.5, 335.0], [59.6, 336.0], [59.7, 336.0], [59.8, 336.0], [59.9, 336.0], [60.0, 336.0], [60.1, 337.0], [60.2, 337.0], [60.3, 337.0], [60.4, 337.0], [60.5, 338.0], [60.6, 338.0], [60.7, 338.0], [60.8, 339.0], [60.9, 339.0], [61.0, 339.0], [61.1, 340.0], [61.2, 340.0], [61.3, 340.0], [61.4, 340.0], [61.5, 340.0], [61.6, 341.0], [61.7, 341.0], [61.8, 341.0], [61.9, 341.0], [62.0, 341.0], [62.1, 341.0], [62.2, 342.0], [62.3, 342.0], [62.4, 342.0], [62.5, 342.0], [62.6, 343.0], [62.7, 343.0], [62.8, 343.0], [62.9, 343.0], [63.0, 343.0], [63.1, 343.0], [63.2, 343.0], [63.3, 344.0], [63.4, 344.0], [63.5, 344.0], [63.6, 344.0], [63.7, 344.0], [63.8, 344.0], [63.9, 344.0], [64.0, 344.0], [64.1, 344.0], [64.2, 344.0], [64.3, 344.0], [64.4, 345.0], [64.5, 345.0], [64.6, 345.0], [64.7, 345.0], [64.8, 345.0], [64.9, 345.0], [65.0, 345.0], [65.1, 346.0], [65.2, 346.0], [65.3, 346.0], [65.4, 346.0], [65.5, 346.0], [65.6, 346.0], [65.7, 347.0], [65.8, 347.0], [65.9, 348.0], [66.0, 348.0], [66.1, 348.0], [66.2, 348.0], [66.3, 348.0], [66.4, 349.0], [66.5, 349.0], [66.6, 349.0], [66.7, 349.0], [66.8, 349.0], [66.9, 350.0], [67.0, 351.0], [67.1, 352.0], [67.2, 359.0], [67.3, 364.0], [67.4, 367.0], [67.5, 367.0], [67.6, 369.0], [67.7, 369.0], [67.8, 369.0], [67.9, 370.0], [68.0, 370.0], [68.1, 370.0], [68.2, 373.0], [68.3, 374.0], [68.4, 377.0], [68.5, 378.0], [68.6, 379.0], [68.7, 381.0], [68.8, 383.0], [68.9, 385.0], [69.0, 388.0], [69.1, 408.0], [69.2, 409.0], [69.3, 410.0], [69.4, 411.0], [69.5, 412.0], [69.6, 416.0], [69.7, 418.0], [69.8, 420.0], [69.9, 421.0], [70.0, 426.0], [70.1, 426.0], [70.2, 427.0], [70.3, 427.0], [70.4, 429.0], [70.5, 429.0], [70.6, 429.0], [70.7, 429.0], [70.8, 429.0], [70.9, 430.0], [71.0, 431.0], [71.1, 432.0], [71.2, 432.0], [71.3, 433.0], [71.4, 433.0], [71.5, 433.0], [71.6, 434.0], [71.7, 435.0], [71.8, 436.0], [71.9, 436.0], [72.0, 437.0], [72.1, 437.0], [72.2, 437.0], [72.3, 439.0], [72.4, 439.0], [72.5, 440.0], [72.6, 440.0], [72.7, 440.0], [72.8, 441.0], [72.9, 441.0], [73.0, 441.0], [73.1, 441.0], [73.2, 442.0], [73.3, 444.0], [73.4, 444.0], [73.5, 445.0], [73.6, 445.0], [73.7, 445.0], [73.8, 446.0], [73.9, 447.0], [74.0, 450.0], [74.1, 455.0], [74.2, 457.0], [74.3, 457.0], [74.4, 459.0], [74.5, 461.0], [74.6, 463.0], [74.7, 464.0], [74.8, 466.0], [74.9, 466.0], [75.0, 468.0], [75.1, 468.0], [75.2, 468.0], [75.3, 469.0], [75.4, 475.0], [75.5, 513.0], [75.6, 514.0], [75.7, 514.0], [75.8, 518.0], [75.9, 518.0], [76.0, 518.0], [76.1, 518.0], [76.2, 519.0], [76.3, 519.0], [76.4, 519.0], [76.5, 520.0], [76.6, 520.0], [76.7, 521.0], [76.8, 521.0], [76.9, 521.0], [77.0, 522.0], [77.1, 522.0], [77.2, 522.0], [77.3, 522.0], [77.4, 522.0], [77.5, 522.0], [77.6, 523.0], [77.7, 524.0], [77.8, 525.0], [77.9, 529.0], [78.0, 530.0], [78.1, 534.0], [78.2, 536.0], [78.3, 536.0], [78.4, 539.0], [78.5, 539.0], [78.6, 540.0], [78.7, 542.0], [78.8, 542.0], [78.9, 543.0], [79.0, 544.0], [79.1, 546.0], [79.2, 547.0], [79.3, 548.0], [79.4, 548.0], [79.5, 549.0], [79.6, 549.0], [79.7, 550.0], [79.8, 550.0], [79.9, 550.0], [80.0, 550.0], [80.1, 552.0], [80.2, 553.0], [80.3, 554.0], [80.4, 554.0], [80.5, 555.0], [80.6, 555.0], [80.7, 556.0], [80.8, 557.0], [80.9, 557.0], [81.0, 558.0], [81.1, 559.0], [81.2, 561.0], [81.3, 562.0], [81.4, 563.0], [81.5, 563.0], [81.6, 564.0], [81.7, 564.0], [81.8, 564.0], [81.9, 566.0], [82.0, 566.0], [82.1, 567.0], [82.2, 567.0], [82.3, 568.0], [82.4, 569.0], [82.5, 569.0], [82.6, 595.0], [82.7, 599.0], [82.8, 599.0], [82.9, 602.0], [83.0, 602.0], [83.1, 605.0], [83.2, 605.0], [83.3, 605.0], [83.4, 606.0], [83.5, 606.0], [83.6, 608.0], [83.7, 608.0], [83.8, 608.0], [83.9, 610.0], [84.0, 611.0], [84.1, 612.0], [84.2, 612.0], [84.3, 612.0], [84.4, 614.0], [84.5, 614.0], [84.6, 614.0], [84.7, 615.0], [84.8, 615.0], [84.9, 616.0], [85.0, 616.0], [85.1, 616.0], [85.2, 617.0], [85.3, 617.0], [85.4, 618.0], [85.5, 619.0], [85.6, 619.0], [85.7, 620.0], [85.8, 620.0], [85.9, 620.0], [86.0, 621.0], [86.1, 621.0], [86.2, 621.0], [86.3, 622.0], [86.4, 625.0], [86.5, 626.0], [86.6, 628.0], [86.7, 629.0], [86.8, 630.0], [86.9, 631.0], [87.0, 632.0], [87.1, 632.0], [87.2, 634.0], [87.3, 634.0], [87.4, 635.0], [87.5, 637.0], [87.6, 639.0], [87.7, 640.0], [87.8, 640.0], [87.9, 642.0], [88.0, 642.0], [88.1, 642.0], [88.2, 643.0], [88.3, 643.0], [88.4, 644.0], [88.5, 646.0], [88.6, 647.0], [88.7, 649.0], [88.8, 649.0], [88.9, 651.0], [89.0, 651.0], [89.1, 652.0], [89.2, 653.0], [89.3, 655.0], [89.4, 655.0], [89.5, 655.0], [89.6, 656.0], [89.7, 656.0], [89.8, 656.0], [89.9, 658.0], [90.0, 658.0], [90.1, 658.0], [90.2, 659.0], [90.3, 661.0], [90.4, 661.0], [90.5, 661.0], [90.6, 662.0], [90.7, 662.0], [90.8, 662.0], [90.9, 663.0], [91.0, 664.0], [91.1, 665.0], [91.2, 666.0], [91.3, 666.0], [91.4, 668.0], [91.5, 668.0], [91.6, 668.0], [91.7, 668.0], [91.8, 668.0], [91.9, 669.0], [92.0, 670.0], [92.1, 670.0], [92.2, 671.0], [92.3, 671.0], [92.4, 672.0], [92.5, 674.0], [92.6, 675.0], [92.7, 677.0], [92.8, 677.0], [92.9, 683.0], [93.0, 689.0], [93.1, 698.0], [93.2, 698.0], [93.3, 699.0], [93.4, 704.0], [93.5, 710.0], [93.6, 711.0], [93.7, 712.0], [93.8, 713.0], [93.9, 716.0], [94.0, 718.0], [94.1, 719.0], [94.2, 720.0], [94.3, 728.0], [94.4, 728.0], [94.5, 728.0], [94.6, 736.0], [94.7, 740.0], [94.8, 745.0], [94.9, 748.0], [95.0, 750.0], [95.1, 753.0], [95.2, 756.0], [95.3, 757.0], [95.4, 757.0], [95.5, 757.0], [95.6, 758.0], [95.7, 760.0], [95.8, 761.0], [95.9, 763.0], [96.0, 765.0], [96.1, 770.0], [96.2, 770.0], [96.3, 772.0], [96.4, 772.0], [96.5, 774.0], [96.6, 775.0], [96.7, 776.0], [96.8, 779.0], [96.9, 786.0], [97.0, 787.0], [97.1, 788.0], [97.2, 792.0], [97.3, 792.0], [97.4, 793.0], [97.5, 801.0], [97.6, 818.0], [97.7, 830.0], [97.8, 833.0], [97.9, 839.0], [98.0, 848.0], [98.1, 852.0], [98.2, 854.0], [98.3, 856.0], [98.4, 858.0], [98.5, 864.0], [98.6, 867.0], [98.7, 868.0], [98.8, 868.0], [98.9, 870.0], [99.0, 874.0], [99.1, 885.0], [99.2, 890.0], [99.3, 890.0], [99.4, 892.0], [99.5, 896.0], [99.6, 897.0], [99.7, 898.0], [99.8, 905.0], [99.9, 917.0]], "isOverall": false, "label": "springcloud添加数据请求", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 335.0, "series": [{"data": [[0.0, 76.0], [300.0, 133.0], [600.0, 105.0], [700.0, 41.0], [100.0, 147.0], [200.0, 335.0], [400.0, 64.0], [800.0, 23.0], [900.0, 2.0], [500.0, 74.0]], "isOverall": false, "label": "springcloud添加数据请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 245.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 755.0, "series": [{"data": [[0.0, 755.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 245.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 413.05999999999995, "minX": 1.62286608E12, "maxY": 413.05999999999995, "series": [{"data": [[1.62286608E12, 413.05999999999995]], "isOverall": false, "label": "springcloud线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62286608E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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
        data: {"result": {"minY": 42.333333333333336, "minX": 7.0, "maxY": 887.5, "series": [{"data": [[7.0, 633.7142857142858], [9.0, 705.0], [11.0, 445.5], [17.0, 458.5], [21.0, 563.25], [22.0, 830.0], [27.0, 682.6], [31.0, 408.25], [33.0, 711.5], [37.0, 349.0], [39.0, 458.5], [38.0, 349.0], [41.0, 593.25], [43.0, 620.0], [45.0, 887.5], [47.0, 569.0], [53.0, 346.0], [55.0, 634.6], [54.0, 786.0], [57.0, 874.0], [56.0, 343.0], [67.0, 341.0], [66.0, 505.24999999999994], [65.0, 792.0], [68.0, 564.0], [78.0, 870.0], [77.0, 618.3333333333334], [84.0, 634.8333333333333], [89.0, 332.0], [88.0, 552.5], [94.0, 490.8], [99.0, 587.0], [101.0, 656.0], [100.0, 658.0], [111.0, 656.0], [109.0, 501.2857142857143], [108.0, 337.0], [112.0, 549.0], [119.0, 612.2857142857143], [123.0, 856.0], [122.0, 656.6666666666666], [133.0, 555.0], [132.0, 521.3333333333334], [129.0, 568.1666666666667], [143.0, 520.0], [140.0, 334.0], [139.0, 550.0], [137.0, 598.5], [148.0, 621.0], [147.0, 485.0], [159.0, 309.0], [158.0, 314.0], [157.0, 428.7777777777778], [166.0, 311.0], [170.0, 433.0], [169.0, 620.0], [168.0, 444.5], [183.0, 618.0], [181.0, 440.0], [180.0, 309.0], [179.0, 402.25], [178.0, 445.0], [190.0, 427.0], [189.0, 433.0], [186.0, 519.25], [197.0, 225.0], [194.0, 417.5], [192.0, 331.0], [204.0, 300.0], [203.0, 224.0], [202.0, 321.5], [201.0, 225.0], [200.0, 303.0], [215.0, 441.0], [214.0, 223.0], [213.0, 224.0], [212.0, 291.6], [211.0, 262.0], [209.0, 225.0], [223.0, 223.5], [221.0, 223.0], [231.0, 221.0], [229.0, 608.0], [227.0, 627.0], [225.0, 222.0], [224.0, 341.1666666666667], [239.0, 658.5], [237.0, 218.5], [235.0, 460.6], [233.0, 664.0], [247.0, 390.5714285714286], [246.0, 761.0], [255.0, 217.0], [251.0, 606.5], [249.0, 217.0], [259.0, 218.0], [271.0, 347.5714285714286], [269.0, 222.0], [268.0, 217.0], [262.0, 652.0], [261.0, 216.5], [258.0, 549.0], [257.0, 278.0], [256.0, 216.0], [287.0, 637.0], [286.0, 472.5], [285.0, 228.0], [283.0, 227.0], [282.0, 548.6], [279.0, 353.0], [273.0, 720.0], [272.0, 218.0], [303.0, 226.0], [300.0, 224.0], [299.0, 549.3333333333334], [297.0, 437.0], [295.0, 224.5], [293.0, 378.33333333333337], [319.0, 228.5], [317.0, 227.5], [316.0, 228.0], [314.0, 225.5], [310.0, 745.0], [309.0, 680.0], [307.0, 223.0], [305.0, 224.25], [335.0, 222.0], [332.0, 344.0], [330.0, 223.0], [329.0, 225.0], [326.0, 278.75], [323.0, 441.0], [320.0, 736.0], [349.0, 219.0], [351.0, 216.66666666666666], [348.0, 344.0], [338.0, 343.0], [337.0, 222.0], [347.0, 218.0], [345.0, 219.0], [344.0, 524.0], [343.0, 441.0], [342.0, 218.5], [340.0, 246.0], [364.0, 214.0], [363.0, 615.0], [362.0, 398.875], [354.0, 522.0], [353.0, 523.0], [352.0, 217.0], [382.0, 211.0], [379.0, 211.0], [378.0, 367.0], [376.0, 212.0], [374.0, 214.0], [373.0, 213.25], [372.0, 214.0], [368.0, 506.75], [397.0, 210.0], [396.0, 351.6], [393.0, 519.0], [392.0, 215.0], [390.0, 406.5], [387.0, 520.0], [386.0, 211.25], [414.0, 567.0], [415.0, 592.0], [413.0, 514.0], [411.0, 522.0], [410.0, 533.6666666666666], [407.0, 249.0], [406.0, 251.5], [404.0, 452.0], [400.0, 520.0], [431.0, 636.5], [430.0, 345.0], [428.0, 665.0], [424.0, 505.3333333333333], [421.0, 669.6], [419.0, 668.0], [445.0, 341.0], [446.0, 554.0], [444.0, 615.0], [443.0, 651.0], [441.0, 606.25], [439.0, 246.0], [438.0, 246.0], [435.0, 344.0], [434.0, 668.6666666666666], [451.0, 646.0], [462.0, 632.0], [460.0, 436.0], [458.0, 639.0], [457.0, 643.0], [455.0, 668.0], [454.0, 641.0], [452.0, 564.0], [450.0, 540.6666666666666], [449.0, 649.0], [477.0, 621.0], [476.0, 620.0], [475.0, 544.0], [474.0, 625.0], [473.0, 361.6], [470.0, 452.5], [467.0, 628.0], [465.0, 563.5], [464.0, 631.5], [495.0, 599.0], [494.0, 542.0], [492.0, 432.5], [488.0, 474.5], [485.0, 257.0], [484.0, 556.3333333333333], [480.0, 620.0], [510.0, 154.5], [511.0, 86.33333333333333], [509.0, 71.0], [508.0, 557.0], [499.0, 605.0], [507.0, 146.4], [506.0, 381.0], [505.0, 226.0], [504.0, 169.83333333333331], [497.0, 287.66666666666663], [496.0, 274.0], [503.0, 289.33333333333337], [502.0, 578.0], [517.0, 289.4], [524.0, 197.0], [525.0, 99.33333333333333], [527.0, 300.5], [521.0, 86.0], [520.0, 197.33333333333334], [518.0, 178.5], [535.0, 185.0], [534.0, 178.11111111111111], [538.0, 225.125], [537.0, 242.25], [539.0, 198.33333333333334], [541.0, 267.0], [542.0, 207.0], [540.0, 228.5], [533.0, 87.5], [532.0, 337.0], [529.0, 433.0], [528.0, 308.6], [543.0, 230.33333333333334], [536.0, 138.6], [513.0, 89.5], [512.0, 137.0], [523.0, 187.0], [573.0, 194.49999999999997], [552.0, 259.3333333333333], [554.0, 187.0], [553.0, 187.5], [557.0, 182.0], [556.0, 341.5], [558.0, 298.0], [555.0, 206.33333333333334], [574.0, 265.0], [575.0, 317.0], [570.0, 364.5], [572.0, 288.6], [569.0, 285.5], [568.0, 252.5], [551.0, 229.0], [549.0, 266.1], [548.0, 191.0], [547.0, 217.5], [544.0, 188.2], [559.0, 272.5], [565.0, 175.0], [564.0, 303.75], [563.0, 233.0], [561.0, 244.88888888888889], [560.0, 249.0], [562.0, 247.0], [600.0, 105.0], [607.0, 102.5], [576.0, 249.00000000000003], [591.0, 255.5], [577.0, 228.0], [579.0, 218.5], [578.0, 218.5], [580.0, 225.0], [583.0, 234.875], [582.0, 242.125], [581.0, 322.6666666666667], [590.0, 142.0], [589.0, 210.63636363636363], [588.0, 204.75], [586.0, 300.5], [585.0, 228.66666666666666], [584.0, 285.0], [587.0, 210.5], [592.0, 174.75], [593.0, 208.66666666666666], [594.0, 317.1333333333333], [597.0, 299.7142857142857], [596.0, 249.4], [595.0, 226.53846153846152], [606.0, 208.33333333333331], [605.0, 185.75], [601.0, 177.5], [602.0, 258.25], [604.0, 252.5], [599.0, 204.375], [598.0, 250.5], [634.0, 249.6], [620.0, 129.75], [617.0, 149.25], [616.0, 314.5], [618.0, 209.77777777777777], [619.0, 163.33333333333334], [626.0, 173.0], [625.0, 196.75], [624.0, 62.0], [627.0, 246.66666666666666], [630.0, 261.0], [629.0, 55.5], [638.0, 42.333333333333336], [637.0, 165.0], [636.0, 219.66666666666669], [635.0, 168.0], [632.0, 53.5], [615.0, 248.66666666666669], [614.0, 169.0], [613.0, 116.4], [611.0, 84.5], [610.0, 323.75], [609.0, 222.66666666666669], [623.0, 62.0], [621.0, 65.5], [622.0, 243.75], [651.0, 96.8], [648.0, 131.0], [645.0, 132.0], [644.0, 134.0], [643.0, 44.0], [640.0, 69.25]], "isOverall": false, "label": "springcloud添加数据请求", "isController": false}, {"data": [[413.0580000000002, 339.16999999999996]], "isOverall": false, "label": "springcloud添加数据请求-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 651.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2016.6666666666667, "minX": 1.62286608E12, "maxY": 4000.0, "series": [{"data": [[1.62286608E12, 2016.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62286608E12, 4000.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62286608E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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
        data: {"result": {"minY": 339.16999999999996, "minX": 1.62286608E12, "maxY": 339.16999999999996, "series": [{"data": [[1.62286608E12, 339.16999999999996]], "isOverall": false, "label": "springcloud添加数据请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62286608E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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
        data: {"result": {"minY": 338.8570000000001, "minX": 1.62286608E12, "maxY": 338.8570000000001, "series": [{"data": [[1.62286608E12, 338.8570000000001]], "isOverall": false, "label": "springcloud添加数据请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62286608E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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
        data: {"result": {"minY": 35.94999999999997, "minX": 1.62286608E12, "maxY": 35.94999999999997, "series": [{"data": [[1.62286608E12, 35.94999999999997]], "isOverall": false, "label": "springcloud添加数据请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62286608E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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
        data: {"result": {"minY": 15.0, "minX": 1.62286608E12, "maxY": 917.0, "series": [{"data": [[1.62286608E12, 917.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62286608E12, 658.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62286608E12, 873.96]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62286608E12, 749.8999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62286608E12, 15.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62286608E12, 253.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62286608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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
    data: {"result": {"minY": 102.0, "minX": 159.0, "maxY": 312.0, "series": [{"data": [[159.0, 102.0], [841.0, 312.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 841.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 102.0, "minX": 159.0, "maxY": 312.0, "series": [{"data": [[159.0, 102.0], [841.0, 312.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 841.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.62286608E12, "maxY": 16.666666666666668, "series": [{"data": [[1.62286608E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62286608E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.62286608E12, "maxY": 16.666666666666668, "series": [{"data": [[1.62286608E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62286608E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.62286608E12, "maxY": 16.666666666666668, "series": [{"data": [[1.62286608E12, 16.666666666666668]], "isOverall": false, "label": "springcloud添加数据请求-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62286608E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.62286608E12, "maxY": 16.666666666666668, "series": [{"data": [[1.62286608E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62286608E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 28800000);
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

