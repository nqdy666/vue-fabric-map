<template>
  <div class="container layout-rl">
    <div class="op-wrapper">
      <div class="section">
        <p class="tip">提示说明</p>
        <ul>
          <li>
            <p>热力图将于svg图绑定在一起，svg图移动，热力图也会跟随移动。</p>
          </li>
        </ul>
      </div>
      <div class="section">
        <p class="tip">属性编辑</p>
        <div>
          <p>最小值：</p>
          <input type="number" v-model="heatmapMin" />
        </div>
        <div>
          <p>最大值：</p>
          <input type="number" v-model="heatmapMax" />
        </div>
        <div>
          <p>热力半径伴随缩放：</p>
          <input type="checkbox" v-model="heatmapRadiusZoom" />
        </div>
        <div>
          <p>是否在点击位置增加热力图点：</p>
          <input type="checkbox" v-model="heatmapClickDrawable" />
        </div>
        <div>
          <p>是否在鼠标移动过的位置增加热力图点：</p>
          <input type="checkbox" v-model="heatmapMoveDrawable" />
        </div>
        <div>
          <p>每次增加热力图点的值：</p>
          <input type="number" v-model="heatmapDrawValue" />
        </div>
        <div>
          <p>热力图数据：</p>
          <textarea class="textarea" :rows="10" readonly :value="JSON.stringify(heatmapData)"></textarea>
        </div>
      </div>
    </div>
    <div class="map-wrapper">
      <fabric-map-vue
        :zoom-type="1"
        :svg-map-url="svgMapUrl"
        :heatmap-min="heatmapMin"
        :heatmap-max="heatmapMax"
        :heatmap-radius-zoom="heatmapRadiusZoom"
        :heatmap-options="heatmapOptions"
        :heatmap-data="heatmapData"
        @heatmapAdd="handleHeatmapAdd"
        :heatmap-click-drawable="heatmapClickDrawable"
        :heatmap-move-drawable="heatmapMoveDrawable"
        :heatmap-draw-value="heatmapDrawValue"
      ></fabric-map-vue>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgMapUrl: "https://qiniu.qjzd.net/cf.svg",
      heatmapOptions: {
      }, // 参考
      heatmapMin: 0,
      heatmapMax: 100,
      heatmapRadiusZoom: false,
      heatmapData: [
        { coordX: 0.3420529188639098, coordY: 0.3743635819107519, value: 20 },
        { coordX: 0.49285317790729966, coordY: 0.32195268044324665, value: 20 },
        { coordX: 0.6630816911832733, coordY: 0.33842467804731974, value: 20 },
        { coordX: 0.6778841705985754, coordY: 0.3369272237196767, value: 20 },
        { coordX: 0.7833518364326026, coordY: 0.29050613956274357, value: 20 },
        { coordX: 0.7778009066518644, coordY: 0.41778975741239915, value: 20 },
        { coordX: 0.7833518364326026, coordY: 0.38933812518718197, value: 20 },
        { coordX: 0.7833518364326026, coordY: 0.38933812518718197, value: 20 },
        { coordX: 0.7833518364326026, coordY: 0.38933812518718197, value: 20 },
        { coordX: 0.6399528170968639, coordY: 0.5315962863132676, value: 20 },
        { coordX: 0.6399528170968639, coordY: 0.5315962863132676, value: 20 },
        { coordX: 0.6399528170968639, coordY: 0.5315962863132676, value: 20 },
        { coordX: 0.6399528170968639, coordY: 0.5315962863132676, value: 20 },
        { coordX: 0.29116939587380897, coordY: 0.6663671758011382, value: 20 },
        { coordX: 0.29116939587380897, coordY: 0.6648697214734952, value: 20 },
        { coordX: 0.29116939587380897, coordY: 0.6648697214734952, value: 20 },
        { coordX: 0.21623184383384228, coordY: 0.5540581012279128, value: 20 },
        { coordX: 0.4197659357942457, coordY: 0.5136268343815515, value: 20 },
        { coordX: 0.3466786936811917, coordY: 0.7337526205450735, value: 20 },
        { coordX: 0.1857017300397818, coordY: 0.805630428271938, value: 20 },
        { coordX: 0.1847765750763254, coordY: 0.8071278825995809, value: 20 },
        { coordX: 0.5354103062262932, coordY: 0.82659478885894, value: 20 },
        { coordX: 0.5539134054954207, coordY: 0.7622042527702907, value: 20 },
        { coordX: 0.5992459987047832, coordY: 0.7187780772686435, value: 20 },
        { coordX: 0.6038717735220651, coordY: 0.7172806229410006, value: 20 },
        { coordX: 0.6047969284855215, coordY: 0.7172806229410006, value: 20 },
        { coordX: 0.6482792117679713, coordY: 0.7112908056304285, value: 20 },
        { coordX: 0.6519798316217968, coordY: 0.7097933513027855, value: 20 },
        { coordX: 0.6778841705985754, coordY: 0.7053009883198564, value: 20 },
        { coordX: 0.6788093255620319, coordY: 0.7038035339922135, value: 20 },
        { coordX: 0.693611804977334, coordY: 0.6993111710092844, value: 20 },
        { coordX: 0.7056388195022668, coordY: 0.6963162623539985, value: 20 },
        { coordX: 0.7065639744657233, coordY: 0.6948188080263553, value: 20 },
        { coordX: 0.7185909889906562, coordY: 0.6918238993710694, value: 20 },
        { coordX: 0.7222916088444816, coordY: 0.6903264450434264, value: 20 },
        { coordX: 0.7232167638079381, coordY: 0.6888289907157834, value: 20 },
        { coordX: 0.7250670737348508, coordY: 0.6888289907157834, value: 20 },
        { coordX: 0.7287676935886763, coordY: 0.6858340820604973, value: 20 },
        { coordX: 0.7296928485521327, coordY: 0.6858340820604973, value: 20 },
        { coordX: 0.7333934684059582, coordY: 0.6813417190775682, value: 20 },
        { coordX: 0.735243778332871, coordY: 0.6798442647499253, value: 20 },
        { coordX: 0.7491211027847167, coordY: 0.6573824498352803, value: 20 },
        { coordX: 0.7518965676750858, coordY: 0.6498951781970652, value: 20 },
        { coordX: 0.7528217226385422, coordY: 0.6439053608864932, value: 20 },
        { coordX: 0.7537468776019985, coordY: 0.6349206349206352, value: 20 },
        { coordX: 0.7537468776019985, coordY: 0.631925726265349, value: 20 },
        { coordX: 0.7537468776019985, coordY: 0.625935908954777, value: 20 },
        { coordX: 0.7537468776019985, coordY: 0.6214435459718481, value: 20 },
        { coordX: 0.7537468776019985, coordY: 0.6184486373165621, value: 20 },
        { coordX: 0.7537468776019985, coordY: 0.604971548367775, value: 20 },
        { coordX: 0.7528217226385422, coordY: 0.603474094040132, value: 20 },
        { coordX: 0.7509714127116294, coordY: 0.592991913746631, value: 20 },
        { coordX: 0.7491211027847167, coordY: 0.5825097334531298, value: 20 },
        { coordX: 0.742645018040522, coordY: 0.5555555555555557, value: 20 },
        { coordX: 0.7380192432232401, coordY: 0.5241090146750526, value: 20 },
        { coordX: 0.7361689332963274, coordY: 0.5061395627433365, value: 20 },
        { coordX: 0.7333934684059582, coordY: 0.47768793051811936, value: 20 },
        { coordX: 0.7324683134425019, coordY: 0.40880503144654107, value: 20 },
        { coordX: 0.7324683134425019, coordY: 0.3773584905660379, value: 20 },
        { coordX: 0.7324683134425019, coordY: 0.3728661275831089, value: 20 },
        { coordX: 0.7333934684059582, coordY: 0.3608864929619649, value: 20 },
        { coordX: 0.7389443981866964, coordY: 0.33393231506439075, value: 20 },
        { coordX: 0.7389443981866964, coordY: 0.3294399520814617, value: 20 },
        { coordX: 0.7417198630770656, coordY: 0.31596286313267463, value: 20 },
        { coordX: 0.750046257748173, coordY: 0.19766397124887708, value: 20 },
        { coordX: 0.7481959478212603, coordY: 0.1916741539383051, value: 20 },
        { coordX: 0.7481959478212603, coordY: 0.19017669961066208, value: 20 },
        { coordX: 0.7148903691368307, coordY: 0.1347708894878708, value: 20 },
        { coordX: 0.6288509575353873, coordY: 0.173704702006589, value: 20 },
        { coordX: 0.6251503376815618, coordY: 0.176699610661875, value: 20 },
        { coordX: 0.6121981681931725, coordY: 0.18268942797244703, value: 20 },
        { coordX: 0.6075723933758906, coordY: 0.18418688230009003, value: 20 },
        { coordX: 0.586293829216394, coordY: 0.1916741539383051, value: 20 },
        { coordX: 0.5048801924322326, coordY: 0.21263851452530716, value: 20 },
        { coordX: 0.47249976871125926, coordY: 0.22012578616352219, value: 20 },
        { coordX: 0.4613979091497828, coordY: 0.2231206948188082, value: 20 },
        { coordX: 0.22918401332223162, coordY: 0.2605570530098834, value: 20 },
        { coordX: 0.22363308354149333, coordY: 0.26355196166516937, value: 20 },
        { coordX: 0.22178277361458057, coordY: 0.26355196166516937, value: 20 },
        { coordX: 0.22085761865112422, coordY: 0.26355196166516937, value: 20 },
        { coordX: 0.2199324636876678, coordY: 0.2650494159928124, value: 20 },
        { coordX: 0.21900730872421145, coordY: 0.26654687032045543, value: 20 },
        { coordX: 0.21900730872421145, coordY: 0.2680443246480984, value: 20 },
        { coordX: 0.20420482930890937, coordY: 0.2875112309074575, value: 20 },
        { coordX: 0.20050420945508385, coordY: 0.29499850254567256, value: 20 },
        { coordX: 0.19772874456471468, coordY: 0.3009883198562446, value: 20 },
        { coordX: 0.19495327967434556, coordY: 0.30548068283917357, value: 20 },
        { coordX: 0.1940281247108892, coordY: 0.30847559149445963, value: 20 },
        { coordX: 0.1931029697474328, coordY: 0.30997304582210256, value: 20 },
        { coordX: 0.19125265982052003, coordY: 0.31147050014974564, value: 20 },
        { coordX: 0.19032750485706368, coordY: 0.31446540880503165, value: 20 },
        { coordX: 0.18847719493015092, coordY: 0.31895777178796064, value: 20 },
        { coordX: 0.18662688500323815, coordY: 0.32195268044324665, value: 20 },
        { coordX: 0.17645018040521798, coordY: 0.41928721174004213, value: 20 },
        { coordX: 0.17552502544176163, coordY: 0.42228212039532814, value: 20 },
        { coordX: 0.17552502544176163, coordY: 0.4237795747229711, value: 20 },
        { coordX: 0.17552502544176163, coordY: 0.42527702905061415, value: 20 },
        { coordX: 0.17459987047830522, coordY: 0.4282719377059002, value: 20 },
        { coordX: 0.17459987047830522, coordY: 0.42976939203354314, value: 20 },
        { coordX: 0.17459987047830522, coordY: 0.4342617550164722, value: 20 },
        { coordX: 0.17459987047830522, coordY: 0.4372566636717582, value: 20 },
        { coordX: 0.17459987047830522, coordY: 0.44174902665468724, value: 20 },
        { coordX: 0.17367471551484887, coordY: 0.4432464809823302, value: 20 },
        { coordX: 0.17367471551484887, coordY: 0.4462413896376162, value: 20 },
        { coordX: 0.17367471551484887, coordY: 0.4477388439652592, value: 20 },
        { coordX: 0.17274956055139246, coordY: 0.4537286612758313, value: 20 },
        { coordX: 0.17274956055139246, coordY: 0.4687032045522614, value: 20 },
        { coordX: 0.1718244055879361, coordY: 0.4731955675351904, value: 20 },
        { coordX: 0.1718244055879361, coordY: 0.47469302186283335, value: 20 },
        { coordX: 0.1718244055879361, coordY: 0.47768793051811936, value: 20 },
        { coordX: 0.1718244055879361, coordY: 0.4791853848457624, value: 20 },
        { coordX: 0.1718244055879361, coordY: 0.4806828391734054, value: 20 },
        { coordX: 0.1718244055879361, coordY: 0.48218029350104846, value: 20 },
        { coordX: 0.1718244055879361, coordY: 0.4836777478286914, value: 20 },
        { coordX: 0.1718244055879361, coordY: 0.4851752021563345, value: 20 },
        { coordX: 0.17089925062447975, coordY: 0.48667265648397745, value: 20 },
        { coordX: 0.17089925062447975, coordY: 0.48817011081162043, value: 20 },
        { coordX: 0.17089925062447975, coordY: 0.48966756513926346, value: 20 },
        { coordX: 0.17089925062447975, coordY: 0.49116501946690644, value: 20 },
        { coordX: 0.17089925062447975, coordY: 0.4956573824498355, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.49715483677747846, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.49865229110512155, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5001497454327645, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5046421084156935, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5091344713986226, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5181191973644805, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5256064690026957, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5300988319856247, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5360886492961967, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5390835579514827, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5405810122791257, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5450733752620547, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5525606469002697, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5615453728661277, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5645402815214138, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.5750224618149148, value: 20 },
        { coordX: 0.16997409566102334, coordY: 0.619946091644205, value: 20 },
        { coordX: 0.3068970302525674, coordY: 0.5076370170709795, value: 20 },
        { coordX: 0.3068970302525674, coordY: 0.5076370170709795, value: 20 },
        { coordX: 0.3068970302525674, coordY: 0.5076370170709795, value: 20 },
        { coordX: 0.3068970302525674, coordY: 0.5076370170709795, value: 20 },
        { coordX: 0.4243917106115276, coordY: 0.5196166516921236, value: 20 },
        { coordX: 0.4243917106115276, coordY: 0.5196166516921236, value: 20 },
        { coordX: 0.4243917106115276, coordY: 0.5196166516921236, value: 20 },
        { coordX: 0.4243917106115276, coordY: 0.5196166516921236, value: 20 },
        { coordX: 0.9878110833564624, coordY: 0.4657082958969754, value: 20 }
      ],
      heatmapDrawValue: 20,
      heatmapClickDrawable: false,
      heatmapMoveDrawable: false
    };
  },
  mounted() {},
  methods: {
    handleHeatmapAdd(data) {
      this.heatmapData.push(data);
    }
  }
};
</script>
<style scoped>
.container,
.map-wrapper {
  height: 100%;
  position: relative;
}
.textarea {
  width: 100%;
}
</style>
