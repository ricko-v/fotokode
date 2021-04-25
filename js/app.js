let path = "/fotokode"; //ubah ke '/' untuk root path
let ba = "";
let te = "";
let co = "";
let la = "";


function ganti(val){
  router.push({ path: path, query: { bg: ba, tema: te,bahasa: la, code: val} });
}

const home = {
  template: `
<section v-if="bg">
  <center>
    <h3>FotoKode</h3>
    <b>Source Code : <a href="https://github.com/ricko-v/fotokode" class="blue-text">Disini</a></b>
    <br>
    <small>Made with <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg> <span class="grey-text">Ricko Veriyanto</small>
  </center>
  <hr>
  <div style="margin-top:50px;margin-bottom:50px;width:100%;overflow-x:scroll;width:100%;border-radius:5px;border:1px solid silver">
    <center>
      <td style="max-width:100%;">
        <div v-bind:style="'border-radius:5px;padding-right:40px;padding-top:45px;padding-bottom:35px;padding-left:40px;background:'+$route.query.bg" id="my-node" class="container-fluid">
	  <div style="display:flex;margin-left:20px;margin-right:20px;margin-bottom:-20px">
            <div style="z-index:4;width:10px;height:10px;background:red;border-radius:50%"></div>
	    <div style="margin-left:10px;z-index:4;width:10px;height:10px;background:yellow;border-radius:50%"></div>
	    <div style="margin-left:10px;z-index:4;width:10px;height:10px;background:lime;border-radius:50%"></div>
          </div>
	  <span id="nod">
          <textarea id="example" v-model="code" autofocus style="text-align:left !important" v-bind:class="'line-numbers-rows prism-live z-depth-4 language-'+ this.$route.query.bahasa">{{ this.$route.query.code }}</textarea>
	  </span>
        </div>
      </td>
    </center>
  </div>

  <div class="input-field col s12 m6 l3" style="margin-top:21px">
    <select v-model="tema">
      <option value="" disabled selected>Pilih tema</option>
      <option value="prism-default">Default</option>
<option value="prism-a11y-dark">A11y-Dark</option>
<option value="prism-duotone-space">Duotone-Space</option>
<option value="prism-atom-dark">Atom-Dark</option>
<option value="prism-ghcolors">Ghcolors</option>
<option value="prism-base16-ateliersulphurpool.light">Base16-Ateliersulphurpool.light</option>
<option value="prism-gruvbox-dark">Gruvbox</option>
<option value="prism-cb">Cb</option>
<option value="prism-hopscotch"Hopscotch</option>
<option value="prism-coldark-cold">Coldark-Cold</option>
<option value="prism-material-dark">Material-Dark</option>
<option value="prism-coldark-dark"> Coldark-Dark</option>
<option value="prism-material-light">Material-Light</option>
<option value="prism-coy-without-shadows">Coy-Without-Shadows</option>
<option value="prism-material-oceanic">Material-Oceanic</option>
<option value="prism-darcula">Darcula</option>
<option value="prism-nord">Nord</option>
<option value="prism-dracula">Dracula</option>
<option value="prism-duotone-dark">Duotone-Dark</option>
<option value="prism-shades-of-purple">Shades-of-Purple</option>
<option value="prism-duotone-earth">Duotone-Earth</option>
<option value="prism-synthwave84">Synthwave84</option>
<option value="prism-duotone-forest">Duotone-Forest</option>
<option value="prism-vs">Vs</option>
<option value="prism-duotone-light">Duotone-Light</option>
<option value="prism-vsc-dark-plus">Vsc-Dark</option>
<option value="prism-duotone-sea">Duotone-Sea</option>
<option value="prism-okaidia">Okaidia</option>
<option value="prism-coy">Coy</option>
<option value="prism-solarizedlight">Solarizedlight</option>
<option value="prism-twilight">Twilight</option>
<option value="prism-dark">Dark</option>
<option value="prism-funky">Funky</option>
    </select>
    <label>Tema</label>
  </div>

  <div class="input-field col s12 m6 l3" style="margin-top:21px">
    <select v-model="bahasa">
      <option value="" disabled selected>Pilih Bahasa</option>
<option>markup</option>
<option>css</option>
<option>clike</option>
<option>javascript</option>
<option>abap</option>
<option>actionscript</option>
<option>ada</option>
<option>apacheconf</option>
<option>apl</option>
<option>applescript</option>
<option>arduino</option>
<option>arff</option>
<option>asciidoc</option>
<option>asm6502</option>
<option>aspnet</option>
<option>autohotkey</option>
<option>autoit</option>
<option>bash</option>
<option>basic</option>
<option>batch</option>
<option>bison</option>
<option>brainfuck</option>
<option>bro</option>
<option>c</option>
<option>csharp</option>
<option>cpp</option>
<option>coffeescript</option>
<option>clojure</option>
<option>crystal</option>
<option>csp</option>
<option>css</option>
<option>d</option>
<option>dart</option>
<option>diff</option>
<option>django</option>
<option>docker</option>
<option>eiffel</option>
<option>elixir</option>
<option>elm</option>
<option>erb</option>
<option>erlang</option>
<option>fsharp</option>
<option>flow</option>
<option>fortran</option>
<option>gedcom</option>
<option>gherkin</option>
<option>git</option>
<option>glsl</option>
<option>gml</option>
<option>go</option>
<option>graphql</option>
<option>groovy</option>
<option>haml</option>
<option>handlebars</option>
<option>haskell</option>
<option>haxe</option>
<option>http</option>
<option>hpkp</option>
<option>hsts</option>
<option>ichigojam</option>
<option>icon</option>
<option>inform7</option>
<option>ini</option>
<option>io</option>
<option>j</option>
<option>java</option>
<option>jolie</option>
<option>json</option>
<option>julia</option>
<option>keyman</option>
<option>kotlin</option>
<option>latex</option>
<option>less</option>
<option>liquid</option>
<option>lisp</option>
<option>livescript</option>
<option>lolcode</option>
<option>lua</option>
<option>makefile</option>
<option>markdown</option>
<option>markup</option>
<option>matlab</option>
<option>mel</option>
<option>mizar</option>
<option>monkey</option>
<option>n4js</option>
<option>nasm</option>
<option>nginx</option>
<option>nim</option>
<option>nix</option>
<option>nsis</option>
<option>objectivec</option>
<option>ocaml</option>
<option>opencl</option>
<option>oz</option>
<option>parigp</option>
<option>parser</option>
<option>pascal</option>
<option>perl</option>
<option>php</option>
<option>php</option>
<option>plsql</option>
<option>powershell</option>
<option>processing</option>
<option>prolog</option>
<option>properties</option>
<option>protobuf</option>
<option>pug</option>
<option>puppet</option>
<option>pure</option>
<option>python</option>
<option>q</option>
<option>qore</option>
<option>r</option>
<option>jsx</option>
<option>tsx</option>
<option>renpy</option>
<option>reason</option>
<option>rest</option>
<option>rip</option>
<option>roboconf</option>
<option>ruby</option>
<option>rust</option>
<option>sas</option>
<option>sass</option>
<option>scss</option>
<option>scala</option>
<option>scheme</option>
<option>smalltalk</option>
<option>smarty</option>
<option>sql</option>
<option>soy</option>
<option>stylus</option>
<option>swift</option>
<option>tap</option>
<option>tcl</option>
<option>textile</option>
<option>tt2</option>
<option>twig</option>
<option>typescript</option>
<option>vbnet</option>
<option>velocity</option>
<option>verilog</option>
<option>vhdl</option>
<option>vim</option>
<option>visual</option>
<option>wasm</option>
<option>wiki</option>
<option>xeora</option>
<option>xojo</option>
<option>xquery</option>
<option>yaml</option>
    </select>
    <label>Bahasa</label>
  </div>

  <div class="col s12 m6 l3" style="overflow:hidden">
    <small class="grey-text">Background</small>
    <input style="overflos:hidden" v-model="bg" data-jscolor="{}">
  </div>

  <div class="col s12 m6 l3" style="margin-top:29px">
    <button v-on:click="download" style="width:100%" class="blue btn waves-effect waves-light">Download</button>
  </div>

</section>
  `,
  data(){
    return {
      bg: this.$route.query.bg,
      tema: "prism-"+this.$route.query.tema,
      bahasa: this.$route.query.bahasa,
      code: this.$route.query.code,
      line: ""
    }
  },
  mounted(){
    this.snap(this.tema);
    if(this.bg == undefined || this.tema == undefined){
      this.snap("prism-okaidia");
      router.push({ path: path, query: { bg: "#CFCACC", tema: "okaidia", bahasa: "javascript", code: "//Paste kodemu disini" } })
      window.location.reload(true);
    }
    M.AutoInit();
  },

  methods: {
    snap: function(t){
      let them = document.createElement('link');
          them.setAttribute("rel", "stylesheet");
          them.setAttribute("id", "tema");
          them.setAttribute("href",'/tema/'+t+'.css');
      document.head.appendChild(them);

      let prism_css = document.createElement('link');
          prism_css.setAttribute('rel','stylesheet');
          prism_css.setAttribute("id", "pcss");
          prism_css.setAttribute("href", "/src/prism-live.css");
      document.head.appendChild(prism_css);

      let prism_live = document.createElement('script');
          prism_live.setAttribute("id", "pjs");
           prism_live.setAttribute('src', 'src/prism-live.js');
      document.head.appendChild(prism_live);
    },
    download: function(){
      var node = document.getElementById('my-node');
      const scale = 3;
      domtoimage.toPng(node, {
        height: node.offsetHeight * scale,
        width: node.offsetWidth * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left",
           width: node.offsetWidth + "px",
          height: node.offsetHeight + "px"
        }
      })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'fotokode.jpeg';
        link.href = dataUrl;
        link.click();
    })
    .catch(er => {
      alert(er);
    });
    },
    hapus: function() {
      let th = document.getElementById("tema");
      let pcss = document.getElementById("pcss");
      let pjs = document.getElementById("pjs");
      th.remove();
      pcss.remove();
      pjs.remove();
    }
  },
  watch: {
    "$route": {
      handler: function(to) {

      },
      deep: true
    },
    bg: function(val) {
      router.push({ path: path,  query: { bg: val, tema: this.$route.query.tema, bahasa: this.$route.query.bahasa, code: this.$route.query.code } });
    },
    tema: function(val) {
      this.hapus();
      this.snap(val);
      router.push({ path: path, query: { bg: this.$route.query.bg, tema: val.slice(6,val.length), bahasa: this.$route.query.bahasa, code: this.$route.query.code } })
    },
    bahasa: function(val) {
      let th = document.getElementById("tema");
      let pcss = document.getElementById("pcss");
      let pjs = document.getElementById("pjs");
      th.remove();
      pcss.remove();
      pjs.remove();
      ba = this.$route.query.bg;
      te = this.$route.query.tema;
      la = val;

      document.getElementById("example").remove();
      document.getElementById("nod").innerHTML =` <textarea onkeyup="ganti(this.value)" id="example" autofocus style="text-align:left !important" class="prism-live z-depth-4 language-${val}">${this.$route.query.code}</textarea>`;
      this.snap("prism-"+this.$route.query.tema);
      router.push({ path: path, query: { bg: this.$route.query.bg, tema: this.$route.query.tema, bahasa: val, code: this.$route.query.code } });
    },
    code: function(val) {
      router.push({ path: path, query: { bg: this.$route.query.bg, tema: this.$route.query.tema, bahasa: this.$route.query.bahasa, code: val} });
    }
  }
}

