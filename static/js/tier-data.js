const dates = ['2001-01-31',
'2001-02-28',
'2001-03-31',
'2001-04-30',
'2001-05-31',
'2001-06-30',
'2001-07-31',
'2001-08-31',
'2001-09-30',
'2001-10-31',
'2001-11-30',
'2001-12-31',
'2002-01-31',
'2002-02-28',
'2002-03-31',
'2002-04-30',
'2002-05-31',
'2002-06-30',
'2002-07-31',
'2002-08-31',
'2002-09-30',
'2002-10-31',
'2002-11-30',
'2002-12-31',
'2003-01-31',
'2003-02-28',
'2003-03-31',
'2003-04-30',
'2003-05-31',
'2003-06-30',
'2003-07-31',
'2003-08-31',
'2003-09-30',
'2003-10-31',
'2003-11-30',
'2003-12-31',
'2004-01-31',
'2004-02-29',
'2004-03-31',
'2004-04-30',
'2004-05-31',
'2004-06-30',
'2004-07-31',
'2004-08-31',
'2004-09-30',
'2004-10-31',
'2004-11-30',
'2004-12-31',
'2005-01-31',
'2005-02-28',
'2005-03-31',
'2005-04-30',
'2005-05-31',
'2005-06-30',
'2005-07-31',
'2005-08-31',
'2005-09-30',
'2005-10-31',
'2005-11-30',
'2005-12-31',
'2006-01-31',
'2006-02-28',
'2006-03-31',
'2006-04-30',
'2006-05-31',
'2006-06-30',
'2006-07-31',
'2006-08-31',
'2006-09-30',
'2006-10-31',
'2006-11-30',
'2006-12-31',
'2007-01-31',
'2007-02-28',
'2007-03-31',
'2007-04-30',
'2007-05-31',
'2007-06-30',
'2007-07-31',
'2007-08-31',
'2007-09-30',
'2007-10-31',
'2007-11-30',
'2007-12-31',
'2008-01-31',
'2008-02-29',
'2008-03-31',
'2008-04-30',
'2008-05-31',
'2008-06-30',
'2008-07-31',
'2008-08-31',
'2008-09-30',
'2008-10-31',
'2008-11-30',
'2008-12-31',
'2009-01-31',
'2009-02-28',
'2009-03-31',
'2009-04-30',
'2009-05-31',
'2009-06-30',
'2009-07-31',
'2009-08-31',
'2009-09-30',
'2009-10-31',
'2009-11-30',
'2009-12-31',
'2010-01-31',
'2010-02-28',
'2010-03-31',
'2010-04-30',
'2010-05-31',
'2010-06-30',
'2010-07-31',
'2010-08-31',
'2010-09-30',
'2010-10-31',
'2010-11-30',
'2010-12-31',
'2011-01-31',
'2011-02-28',
'2011-03-31',
'2011-04-30',
'2011-05-31',
'2011-06-30',
'2011-07-31',
'2011-08-31',
'2011-09-30',
'2011-10-31',
'2011-11-30',
'2011-12-31',
'2012-01-31',
'2012-02-29',
'2012-03-31',
'2012-04-30',
'2012-05-31',
'2012-06-30',
'2012-07-31',
'2012-08-31',
'2012-09-30',
'2012-10-31',
'2012-11-30',
'2012-12-31',
'2013-01-31',
'2013-02-28',
'2013-03-31',
'2013-04-30',
'2013-05-31',
'2013-06-30',
'2013-07-31',
'2013-08-31',
'2013-09-30',
'2013-10-31',
'2013-11-30',
'2013-12-31',
'2014-01-31',
'2014-02-28',
'2014-03-31',
'2014-04-30',
'2014-05-31',
'2014-06-30',
'2014-07-31',
'2014-08-31',
'2014-09-30',
'2014-10-31',
'2014-11-30',
'2014-12-31',
'2015-01-31',
'2015-02-28',
'2015-03-31',
'2015-04-30',
'2015-05-31',
'2015-06-30',
'2015-07-31',
'2015-08-31',
'2015-09-30',
'2015-10-31',
'2015-11-30',
'2015-12-31',
'2016-01-31',
'2016-02-29',
'2016-03-31',
'2016-04-30',
'2016-05-31',
'2016-06-30',
'2016-07-31',
'2016-08-31',
'2016-09-30',
'2016-10-31',
'2016-11-30',
'2016-12-31',
'2017-01-31',
'2017-02-28',
'2017-03-31',
'2017-04-30',
'2017-05-31',
'2017-06-30',
'2017-07-31',
'2017-08-31',
'2017-09-30',
'2017-10-31',
'2017-11-30',
'2017-12-31',
'2018-01-31',
'2018-02-28',
'2018-03-31',
'2018-04-30',
'2018-05-31',
'2018-06-30',
'2018-07-31',
'2018-08-31',
'2018-09-30',
'2018-10-31',
'2018-11-30',
'2018-12-31',
'2019-01-31',
'2019-02-28',
'2019-03-31',
'2019-04-30',
'2019-05-31',
'2019-06-30',
'2019-07-31',
'2019-08-31',
'2019-09-30',
'2019-10-31',
'2019-11-30',
'2019-12-31',
'2020-01-31',
'2020-02-29',
'2020-03-31',
'2020-04-30',
'2020-05-31',
'2020-06-30',
'2020-07-31',
'2020-08-31',
'2020-09-30',
'2020-10-31',
'2020-11-30',
'2020-12-31',
'2021-01-31',
'2021-02-28',
'2021-03-31',
'2021-04-30',
'2021-05-31',
'2021-06-30'];

const valuesMid = [136116.0,
    136907.0,
    137691.0,
    138487.0,
    139290.0,
    140067.0,
    140827.0,
    141597.0,
    142374.0,
    143164.0,
    143924.0,
    144669.0,
    145414.0,
    146191.0,
    146986.0,
    147779.0,
    148583.0,
    149429.0,
    150318.0,
    151227.0,
    152130.0,
    153058.0,
    154020.0,
    155015.0,
    155993.0,
    156956.0,
    157902.0,
    158853.0,
    159812.0,
    160746.0,
    161689.0,
    162694.0,
    163789.0,
    164937.0,
    166085.0,
    167228.0,
    168441.0,
    169758.0,
    171159.0,
    172566.0,
    174054.0,
    175615.0,
    177269.0,
    178895.0,
    180515.0,
    182118.0,
    183743.0,
    185442.0,
    187188.0,
    188938.0,
    190657.0,
    192459.0,
    194278.0,
    196177.0,
    198095.0,
    200037.0,
    201976.0,
    203808.0,
    205559.0,
    207139.0,
    208550.0,
    209832.0,
    211079.0,
    212261.0,
    213350.0,
    214254.0,
    214957.0,
    215484.0,
    215805.0,
    216035.0,
    216180.0,
    216262.0,
    216329.0,
    216345.0,
    216305.0,
    216172.0,
    215856.0,
    215392.0,
    214769.0,
    214170.0,
    213458.0,
    212659.0,
    211673.0,
    210635.0,
    209425.0,
    207982.0,
    206350.0,
    204586.0,
    202864.0,
    201125.0,
    199399.0,
    197533.0,
    195746.0,
    193948.0,
    192097.0,
    190179.0,
    188314.0,
    186751.0,
    185245.0,
    183778.0,
    182342.0,
    181111.0,
    180159.0,
    179364.0,
    178683.0,
    178151.0,
    177932.0,
    177834.0,
    177769.0,
    177569.0,
    177420.0,
    177384.0,
    177304.0,
    177018.0,
    176326.0,
    175498.0,
    174542.0,
    173604.0,
    172559.0,
    171580.0,
    170602.0,
    169678.0,
    168705.0,
    167665.0,
    166627.0,
    165729.0,
    165109.0,
    164656.0,
    164321.0,
    163953.0,
    163627.0,
    163309.0,
    163098.0,
    162968.0,
    163042.0,
    163280.0,
    163671.0,
    164088.0,
    164556.0,
    165080.0,
    165682.0,
    166381.0,
    167185.0,
    168063.0,
    169045.0,
    170079.0,
    171219.0,
    172406.0,
    173658.0,
    174965.0,
    176307.0,
    177653.0,
    178958.0,
    180193.0,
    181306.0,
    182336.0,
    183299.0,
    184228.0,
    184963.0,
    185568.0,
    186113.0,
    186718.0,
    187311.0,
    187828.0,
    188334.0,
    188927.0,
    189649.0,
    190406.0,
    191132.0,
    191878.0,
    192748.0,
    193650.0,
    194564.0,
    195377.0,
    196183.0,
    197042.0,
    197934.0,
    198804.0,
    199592.0,
    200461.0,
    201408.0,
    202378.0,
    203238.0,
    204132.0,
    205041.0,
    206028.0,
    207037.0,
    208059.0,
    209088.0,
    210127.0,
    211239.0,
    212325.0,
    213392.0,
    214433.0,
    215552.0,
    216718.0,
    217879.0,
    219042.0,
    220159.0,
    221299.0,
    222482.0,
    223730.0,
    225004.0,
    226267.0,
    227487.0,
    228749.0,
    230015.0,
    231286.0,
    232543.0,
    233739.0,
    234858.0,
    235844.0,
    236720.0,
    237525.0,
    238321.0,
    239168.0,
    240094.0,
    240964.0,
    241760.0,
    242507.0,
    243321.0,
    244150.0,
    244881.0,
    245479.0,
    246009.0,
    246547.0,
    247122.0,
    247873.0,
    248913.0,
    250163.0,
    251618.0,
    253064.0,
    254134.0,
    255008.0,
    256105.0,
    257902.0,
    260160.0,
    262686.0,
    265487.0,
    268473.0,
    271572.0,
    274922.0,
    278575.0,
    282729.0,
    287678.0,
    293349.0];

const predictionsMid = [137410.66,
    137410.66,
    137692.9,
    138406.18,
    139172.18,
    140129.1,
    140905.54,
    141528.77,
    142282.66,
    142996.29,
    143632.37,
    144662.42,
    145567.79,
    146234.45,
    146898.53,
    147550.85,
    148698.87,
    149074.85,
    150206.49,
    151516.68,
    152583.36,
    153181.2,
    154037.22,
    154973.16,
    156009.38,
    156713.17,
    157301.39,
    157589.36,
    159653.82,
    161452.04,
    161864.13,
    163069.2,
    163873.71,
    164278.83,
    166025.63,
    168315.73,
    168799.55,
    169759.88,
    170045.74,
    173513.89,
    174672.46,
    175391.44,
    176857.34,
    177912.04,
    178067.96,
    181205.25,
    182690.17,
    184546.28,
    186151.22,
    188679.15,
    189866.49,
    190143.91,
    193261.37,
    194128.7,
    196229.15,
    197063.08,
    200325.32,
    198790.98,
    192737.6,
    201961.42,
    204095.58,
    207136.62,
    204721.41,
    209390.69,
    211457.98,
    213033.4,
    213712.98,
    213777.9,
    215207.1,
    216070.42,
    216346.48,
    216318.77,
    216355.81,
    216344.08,
    216295.66,
    216171.32,
    216477.12,
    216941.75,
    219160.26,
    218508.73,
    215347.77,
    213449.85,
    211649.85,
    210337.87,
    209375.13,
    206891.97,
    206068.7,
    204771.65,
    202964.26,
    200896.38,
    198834.96,
    195965.38,
    195220.49,
    193826.98,
    191889.35,
    190360.85,
    188453.82,
    187242.63,
    185534.03,
    183924.8,
    183254.18,
    182909.22,
    183242.42,
    181521.74,
    181326.6,
    181925.84,
    181241.55,
    179210.47,
    179200.66,
    179355.54,
    178367.61,
    178257.15,
    178150.57,
    177725.69,
    176613.66,
    176063.7,
    175951.89,
    173155.09,
    172428.98,
    172971.81,
    173417.11,
    170192.3,
    168650.93,
    168082.74,
    167584.54,
    166152.11,
    165646.53,
    165288.79,
    164326.17,
    163930.6,
    163568.29,
    163352.01,
    163176.53,
    163051.07,
    163117.22,
    163332.22,
    163647.92,
    164036.68,
    164741.69,
    165332.8,
    165757.61,
    166519.15,
    167462.44,
    168463.09,
    169680.93,
    170333.47,
    171161.09,
    172343.28,
    174586.45,
    175526.43,
    178212.83,
    178548.74,
    179270.42,
    180685.37,
    181733.24,
    182697.0,
    183831.62,
    184881.6,
    185630.27,
    185477.67,
    188111.56,
    188058.1,
    188932.89,
    189325.34,
    188431.36,
    188894.06,
    191076.02,
    192016.36,
    191542.36,
    192133.31,
    192969.32,
    194416.9,
    194692.95,
    195585.22,
    196286.99,
    196570.14,
    197386.66,
    198709.14,
    199430.88,
    199757.33,
    200753.77,
    201972.14,
    204267.98,
    204886.78,
    206261.71,
    206595.69,
    207665.02,
    208837.58,
    209760.58,
    210609.88,
    211200.26,
    212449.38,
    213828.38,
    214805.25,
    215648.09,
    216497.36,
    217485.31,
    218584.69,
    219620.52,
    219932.33,
    221590.52,
    223121.76,
    223503.25,
    224765.63,
    225850.45,
    225902.57,
    224939.06,
    222978.53,
    228700.62,
    233923.05,
    234755.41,
    235578.38,
    236466.06,
    237418.07,
    238436.82,
    239378.87,
    240001.31,
    240777.7,
    241632.41,
    242145.76,
    242515.66,
    244701.46,
    245554.14,
    245648.2,
    246080.84,
    246408.3,
    247072.66,
    247941.78,
    249085.76,
    250491.29,
    251900.67,
    252897.48,
    254164.12,
    255893.6,
    257617.24,
    259082.06,
    260365.23,
    262414.88,
    264217.83,
    266540.93,
    271332.81,
    274314.72,
    278553.51,
    278553.51,
    278553.51,
    278553.51];

const valuesLo = [69724.08,
    69724.08,
    69916.35,
    70274.53,
    70667.05,
    71173.95,
    71460.8,
    71837.54,
    72184.56,
    72506.12,
    72795.25,
    73269.79,
    73794.81,
    74054.42,
    74301.26,
    74636.9,
    75196.0,
    75303.44,
    76022.16,
    76782.77,
    77082.85,
    77354.78,
    77838.88,
    78356.49,
    78764.58,
    79154.74,
    79371.37,
    79581.69,
    80593.38,
    81440.71,
    81526.24,
    81986.43,
    82448.46,
    82909.45,
    83832.63,
    84806.59,
    84924.97,
    85444.59,
    85444.59,
    86799.8,
    87640.0,
    88067.19,
    88789.89,
    89359.61,
    90030.23,
    90769.63,
    91134.54,
    92183.62,
    93057.0,
    93859.48,
    94701.65,
    94686.16,
    96051.92,
    96932.0,
    97916.65,
    98747.38,
    99192.49,
    99236.38,
    97777.26,
    100009.31,
    101084.35,
    101978.11,
    101072.17,
    102821.6,
    103866.35,
    104384.53,
    104971.18,
    104965.85,
    105632.01,
    106101.25,
    106295.91,
    106495.68,
    106471.12,
    106644.5,
    106631.04,
    106696.98,
    106840.64,
    107437.48,
    108728.31,
    107530.47,
    107729.76,
    107309.72,
    105810.65,
    105073.46,
    104206.27,
    103309.65,
    103130.73,
    102647.64,
    101977.18,
    101568.24,
    101037.03,
    99467.82,
    99122.85,
    98578.68,
    97687.8,
    97023.9,
    95950.3,
    95293.08,
    94846.54,
    94008.98,
    93644.6,
    93146.75,
    92701.15,
    92227.31,
    91784.45,
    91642.99,
    91265.32,
    91314.23,
    91563.69,
    91638.4,
    91275.76,
    91484.71,
    92043.69,
    91465.34,
    90447.77,
    90289.37,
    89932.88,
    89674.6,
    89648.67,
    87839.95,
    86856.61,
    86403.55,
    86170.19,
    85855.41,
    85498.06,
    85198.97,
    84857.12,
    84392.41,
    84275.55,
    83997.14,
    83668.67,
    83537.13,
    83453.71,
    83292.21,
    83356.4,
    83459.1,
    83622.48,
    83869.84,
    84125.37,
    84469.73,
    84693.92,
    85041.7,
    85586.36,
    85937.07,
    86621.31,
    86805.13,
    87278.89,
    87832.51,
    89004.27,
    89477.84,
    90679.83,
    90951.55,
    91373.2,
    92034.54,
    92609.01,
    93252.82,
    93694.59,
    93964.34,
    94572.78,
    95117.81,
    95570.9,
    95589.35,
    95898.7,
    95776.63,
    96346.89,
    95758.67,
    96500.04,
    97533.18,
    97931.66,
    99243.15,
    99038.3,
    99154.72,
    98793.77,
    99402.58,
    100259.02,
    100905.08,
    101229.17,
    101664.94,
    102198.56,
    102701.65,
    103329.73,
    103448.42,
    104209.37,
    104356.15,
    104484.75,
    105606.19,
    105829.3,
    106554.53,
    106762.8,
    107079.85,
    107642.5,
    108361.34,
    108859.41,
    109554.09,
    109948.11,
    110227.82,
    110782.48,
    110447.53,
    110162.95,
    109997.76,
    110570.36,
    113672.94,
    114986.05,
    116006.63,
    116465.09,
    116827.08,
    117459.18,
    118477.31,
    119401.93,
    120170.95,
    120474.45,
    121042.11,
    121543.93,
    122109.82,
    122669.55,
    123235.93,
    123552.54,
    123970.54,
    124572.0,
    124926.4,
    125011.3,
    126599.71,
    126898.87,
    126976.36,
    127269.29,
    127582.28,
    128016.35,
    128496.43,
    128959.15,
    129613.16,
    130897.16,
    131303.9,
    131974.25,
    132610.9,
    133568.57,
    134317.9,
    135188.56,
    136281.13,
    137130.73,
    138307.47,
    140743.58,
    141718.05,
    143977.49,
    143977.49,
    143977.49,
    143977.49];

const predictionsLo = [69859.61,
    69859.61,
    70036.8,
    70266.8,
    70735.0,
    71215.11,
    71523.81,
    71874.4,
    72166.1,
    72469.9,
    72780.63,
    73353.95,
    73758.45,
    74039.05,
    74350.83,
    74674.12,
    75253.1,
    75389.2,
    75869.59,
    76625.09,
    77121.29,
    77471.17,
    77832.9,
    78361.15,
    78722.42,
    79182.1,
    79448.59,
    79609.88,
    80571.13,
    81193.2,
    81514.05,
    81956.68,
    82537.69,
    82808.35,
    83843.25,
    84735.25,
    84843.39,
    85318.24,
    85389.58,
    86946.4,
    87598.9,
    88054.59,
    88806.0,
    89420.68,
    90004.31,
    90826.26,
    91303.92,
    92335.34,
    93127.35,
    93819.64,
    94459.59,
    94566.32,
    95990.76,
    96970.03,
    97852.36,
    98500.57,
    99121.8,
    99469.44,
    97971.16,
    99727.35,
    101078.12,
    101945.17,
    101479.1,
    103151.21,
    103701.84,
    104536.05,
    104898.3,
    104853.68,
    105628.75,
    106196.34,
    106400.06,
    106508.33,
    106540.4,
    106615.27,
    106686.08,
    106811.48,
    106736.59,
    107498.29,
    109187.64,
    107538.65,
    107902.86,
    107390.42,
    105746.14,
    105449.61,
    104658.22,
    103655.56,
    103374.24,
    102997.24,
    102472.22,
    101853.66,
    100839.3,
    99413.6,
    99216.44,
    98474.38,
    97897.45,
    97120.44,
    96007.14,
    95592.59,
    94962.82,
    94185.39,
    93804.95,
    93255.54,
    92988.71,
    92259.26,
    91737.47,
    91418.95,
    91492.18,
    92007.73,
    91937.07,
    91219.77,
    90946.45,
    91073.53,
    91263.6,
    91091.95,
    90393.79,
    90073.84,
    90261.0,
    89380.22,
    89730.41,
    87641.54,
    87030.38,
    86776.85,
    86537.56,
    86251.26,
    85897.98,
    85214.38,
    84813.79,
    84725.08,
    84298.49,
    83891.75,
    83558.14,
    83567.91,
    83484.49,
    83303.53,
    83553.73,
    83545.58,
    83649.03,
    83859.51,
    84138.38,
    84489.37,
    84734.88,
    85077.1,
    85530.28,
    85890.87,
    86634.86,
    86855.44,
    87207.27,
    87656.51,
    88955.86,
    89477.55,
    90723.99,
    90980.44,
    91432.43,
    92137.5,
    92653.53,
    93228.96,
    93583.46,
    93944.14,
    94894.91,
    95510.53,
    95629.69,
    95628.16,
    95791.24,
    96309.11,
    96292.62,
    96331.93,
    97139.71,
    97417.7,
    98460.07,
    99730.3,
    99194.93,
    99116.32,
    99248.7,
    99128.32,
    100183.51,
    100827.94,
    101160.82,
    101544.78,
    102029.53,
    102522.05,
    103202.8,
    103676.47,
    104262.73,
    104289.19,
    104205.36,
    105121.0,
    105376.54,
    106492.65,
    106717.71,
    107151.07,
    107494.89,
    108183.63,
    108494.22,
    109624.75,
    110015.67,
    110371.84,
    110661.65,
    110865.57,
    110177.49,
    109811.34,
    110219.43,
    113666.12,
    115344.96,
    115834.23,
    116114.4,
    116174.87,
    117941.0,
    118510.52,
    119422.44,
    120106.75,
    120477.2,
    121121.14,
    121583.74,
    122028.09,
    122661.75,
    123244.66,
    123644.93,
    124001.46,
    124564.02,
    124869.75,
    124964.85,
    126325.86,
    126912.36,
    127148.44,
    127435.72,
    127707.79,
    128034.23,
    128424.26,
    129201.04,
    129788.37,
    130819.58,
    131001.3,
    131713.58,
    132549.65,
    133520.13,
    134164.2,
    135089.06,
    136271.84,
    137164.58,
    138207.09,
    140635.45,
    141977.23,
    144087.99,
    144087.99,
    144087.99,
    144087.99];

const valuesHi = [265906.0,
    267767.0,
    269623.0,
    271520.0,
    273371.0,
    275110.0,
    276771.0,
    278457.0,
    280168.0,
    281922.0,
    283612.0,
    285260.0,
    286930.0,
    288680.0,
    290487.0,
    292318.0,
    294211.0,
    296278.0,
    298499.0,
    300806.0,
    303094.0,
    305439.0,
    307873.0,
    310385.0,
    312837.0,
    315240.0,
    317646.0,
    320026.0,
    322394.0,
    324599.0,
    326866.0,
    329276.0,
    331937.0,
    334706.0,
    337585.0,
    340473.0,
    343619.0,
    346952.0,
    350490.0,
    354078.0,
    357973.0,
    362162.0,
    366511.0,
    370751.0,
    374959.0,
    379106.0,
    383223.0,
    387454.0,
    391684.0,
    395993.0,
    400164.0,
    404605.0,
    408988.0,
    413497.0,
    418042.0,
    422646.0,
    427285.0,
    431663.0,
    435620.0,
    439161.0,
    442232.0,
    444981.0,
    447599.0,
    449928.0,
    452047.0,
    453615.0,
    454616.0,
    455119.0,
    454999.0,
    454696.0,
    454329.0,
    453897.0,
    453467.0,
    452958.0,
    452406.0,
    451661.0,
    450394.0,
    448730.0,
    446698.0,
    444699.0,
    442459.0,
    439979.0,
    437192.0,
    434217.0,
    431007.0,
    427132.0,
    422815.0,
    418135.0,
    413571.0,
    409177.0,
    404901.0,
    400574.0,
    396492.0,
    392475.0,
    388251.0,
    383916.0,
    379698.0,
    376320.0,
    373090.0,
    369985.0,
    367087.0,
    364663.0,
    362909.0,
    361388.0,
    360119.0,
    359183.0,
    358979.0,
    359045.0,
    359082.0,
    358713.0,
    358507.0,
    358600.0,
    358635.0,
    358066.0,
    356668.0,
    355031.0,
    353234.0,
    351418.0,
    349312.0,
    347388.0,
    345564.0,
    343917.0,
    342072.0,
    340080.0,
    337942.0,
    336255.0,
    335049.0,
    334165.0,
    333368.0,
    332481.0,
    331782.0,
    331044.0,
    330506.0,
    330101.0,
    330219.0,
    330704.0,
    331619.0,
    332578.0,
    333678.0,
    334865.0,
    336227.0,
    337906.0,
    339775.0,
    341880.0,
    344138.0,
    346597.0,
    349310.0,
    352191.0,
    355184.0,
    358205.0,
    361262.0,
    364315.0,
    367273.0,
    369961.0,
    372362.0,
    374539.0,
    376648.0,
    378595.0,
    380011.0,
    381058.0,
    381913.0,
    382958.0,
    384008.0,
    384892.0,
    385785.0,
    386861.0,
    388261.0,
    389704.0,
    391094.0,
    392563.0,
    394324.0,
    396043.0,
    397806.0,
    399319.0,
    400861.0,
    402533.0,
    404299.0,
    406051.0,
    407593.0,
    409333.0,
    411115.0,
    412865.0,
    414342.0,
    416040.0,
    417764.0,
    419613.0,
    421415.0,
    423281.0,
    425142.0,
    427043.0,
    429047.0,
    430987.0,
    432947.0,
    434855.0,
    436925.0,
    439027.0,
    441185.0,
    443366.0,
    445471.0,
    447557.0,
    449737.0,
    452019.0,
    454408.0,
    456804.0,
    459163.0,
    461644.0,
    464081.0,
    466385.0,
    468567.0,
    470614.0,
    472467.0,
    473955.0,
    475157.0,
    476251.0,
    477368.0,
    478472.0,
    479649.0,
    480672.0,
    481647.0,
    482693.0,
    483948.0,
    485252.0,
    486240.0,
    486939.0,
    487528.0,
    488179.0,
    489010.0,
    490366.0,
    492459.0,
    494988.0,
    497925.0,
    500644.0,
    502330.0,
    503518.0,
    505363.0,
    508879.0,
    513349.0,
    518358.0,
    523861.0,
    529725.0,
    535795.0,
    542454.0,
    549763.0,
    558279.0,
    568698.0,
    580755.0];

const predictionsHi = [268734.19,
    268734.19,
    269458.03,
    270837.51,
    272705.17,
    274996.96,
    276820.36,
    278343.77,
    279985.07,
    281600.48,
    283131.93,
    285592.48,
    287098.91,
    288838.19,
    290329.27,
    291982.99,
    294709.14,
    295105.42,
    297877.01,
    301321.34,
    303984.61,
    305726.73,
    307887.44,
    310523.55,
    312874.64,
    314780.22,
    316317.3,
    317513.18,
    321805.15,
    325034.17,
    326650.18,
    330523.18,
    332708.43,
    333378.55,
    338309.63,
    343332.23,
    344516.98,
    346848.36,
    349440.31,
    356559.92,
    359102.36,
    361378.37,
    365042.95,
    367382.79,
    366532.96,
    376501.98,
    379500.38,
    386067.08,
    390691.49,
    393560.4,
    398136.17,
    403008.99,
    406287.95,
    408007.43,
    414057.4,
    415756.83,
    420205.83,
    420286.36,
    408656.49,
    430774.59,
    437754.82,
    439275.32,
    438886.02,
    446724.93,
    448713.39,
    451376.27,
    452457.96,
    452340.4,
    454553.41,
    454577.56,
    454265.5,
    453941.57,
    453487.19,
    451808.85,
    451968.33,
    451561.31,
    451088.32,
    451092.41,
    454095.29,
    448288.73,
    447631.76,
    447012.71,
    438892.95,
    433100.67,
    428820.36,
    424622.23,
    420654.65,
    417229.89,
    412836.37,
    408715.33,
    405910.82,
    401659.45,
    397367.06,
    395196.6,
    389803.96,
    384509.22,
    380551.75,
    377668.45,
    374367.48,
    370974.7,
    368203.58,
    371135.05,
    372490.9,
    366602.65,
    364772.66,
    368326.38,
    367711.11,
    363099.18,
    364191.35,
    364052.5,
    360531.15,
    360140.87,
    360124.25,
    357875.09,
    357125.5,
    355401.26,
    352921.65,
    347799.85,
    344211.7,
    343763.57,
    343684.19,
    343912.12,
    342765.52,
    340344.16,
    339845.47,
    337727.9,
    336046.19,
    334279.2,
    333043.9,
    332225.51,
    331568.7,
    330956.28,
    330630.52,
    330368.9,
    330342.24,
    330681.87,
    331445.38,
    332427.97,
    333681.16,
    335929.16,
    336478.93,
    338239.44,
    340236.2,
    342790.88,
    345308.95,
    347393.49,
    349847.06,
    352037.72,
    356731.19,
    358399.71,
    367144.43,
    366280.68,
    368482.2,
    371049.13,
    373513.48,
    375654.73,
    377934.31,
    379391.03,
    381746.2,
    384376.22,
    385945.78,
    385981.03,
    385426.41,
    386153.31,
    387518.83,
    386873.22,
    388722.0,
    392790.18,
    390412.71,
    395781.73,
    395585.37,
    395710.19,
    395999.13,
    396046.3,
    399532.1,
    402978.83,
    404531.89,
    406883.71,
    407479.95,
    408814.22,
    412724.27,
    413722.41,
    416578.52,
    416984.84,
    417663.71,
    419766.22,
    421255.74,
    425109.68,
    426107.4,
    427468.12,
    429180.26,
    431603.12,
    433054.84,
    436228.43,
    438051.77,
    439124.68,
    442101.62,
    444350.37,
    445392.17,
    447708.28,
    449578.87,
    452021.94,
    453839.53,
    455953.57,
    457614.79,
    459457.1,
    463168.95,
    464518.13,
    466884.71,
    470233.89,
    471365.48,
    473053.67,
    474106.36,
    471296.77,
    464186.15,
    464429.22,
    477545.37,
    480740.43,
    481597.96,
    481734.41,
    482025.89,
    485899.13,
    486744.56,
    486996.33,
    487663.77,
    488090.67,
    489394.97,
    490748.68,
    492832.14,
    495622.5,
    497944.0,
    501120.56,
    502846.3,
    505436.41,
    508351.44,
    510716.49,
    513396.08,
    517418.76,
    521537.19,
    526869.78,
    535414.16,
    540319.49,
    546224.09,
    548756.09,
    548756.09,
    548756.09];