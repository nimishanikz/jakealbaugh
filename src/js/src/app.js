var settings = {
  frames: {
    count: 226,
    total_steps: 24484,
    lo_path: "https://s3-us-west-2.amazonaws.com/jakealbaugh.com/images/bg/lo/",
    hi_path: "https://s3-us-west-2.amazonaws.com/jakealbaugh.com/images/bg/hi/",
    prefix: "image-",
    ext: ".jpg"
  },
  progress: {
    loader: document.getElementById("loader"),
    loaderPrism: document.querySelector("#loader .prism .shape"),
    loaderMessage: document.querySelector("#loader .message"),
    indicator: document.getElementById("indicator"),
    indicatorContainer: document.getElementById("indicator-container"),
    prismMenu: document.getElementById("prism-menu"),
    spinnerPrism: document.getElementById("progress-spinner-prism"),
    completeClassName: "loaded"
  },
  background: {
    element: document.getElementById("background")
  },
  sectionsContainer: document.getElementById("sections"),
  sections: []
};

var section_content = [
  [
    "<div>I am Jake and I build for the web.</div>",
    "<div>You are <em>here</em>.</div>",
    "<div></div>",
    "<div></div>",
    "<div></div>",
    "<div></div>"
  ],
  [
    "<div>I could waste your time</div>",
    "<div>by building a thorough website</div>",
    "<div>that would attempt to</div>",
    "<div>convince you that I know about <em>x</em></div>",
    "<div>and establish that <em>y</em> is important to me.</div>"
  ],
  [
    "<div>But ultimately, my preference and skills</div>",
    "<div>are as temporary as every language I know</div>",
    "<div>and as fickle as every tool I use.</div>",
    "<div class='space'>As <em>temporary</em> as things</div>",
    "<div>that will be <em>useless</em> in 10 years.</div>",
    "<div class='space'>As <em>fickle</em> as things</div>",
    "<div>that can be learned by <em>anyone</em>.</div>"
  ],
  [
    "<div>The things that last are not complete,</div>",
    "<div>they are <em>in progress</em>.</div>",
    "<div class='space'>So what I <em>will</em> tell you is that</div>",
    "<div>I am <em>in progress</em>.</div>"
  ],
  [
    "<div>I hold on to my methods <em>loosely</em>,</div>",
    "<div>embrace <em>flexibility</em> and <em>modularity</em>,</div>",
    "<div>am willing to <em>learn</em>,</div>",
    "<div>expect to be <em>wrong</em>,</div>",
    "<div>and am <em>confident</em> when I’m right.</div>"
  ],
  [
    "<div>If you want to see what I am doing <em>now</em>:</div>",
    '<div class="sans"><a href="https://blog.jakealbaugh.com" target="_blank">Blog</a> / <a href="https://codepen.io/jakealbaugh" target="_blank">CodePen</a> / <a href="https://github.com/jakealbaugh" target="_blank">GitHub</a></div>',
    '<div class="space">Or, if you would like to contact me:</div>',
    '<div class="sans lower"><a href="https://twitter.com/jake_albaugh" target="_blank">@jake_albaugh</a> / <a href="mailto:jake.albaugh@gmail.com" target="_blank">jake.albaugh@gmail.com</a></div>'
  ]
];

var total_frames = 226;
var start = 46;
var stop = 196;
var pad = 10;
var each = Math.floor((stop - start) / section_content.length);

for (var i = 0; i < section_content.length; i++) {
  var in_frame = start + each * i,
    out_frame = in_frame + each;
  settings.sections.push({
    in_perc: in_frame / total_frames,
    out_perc: out_frame / total_frames,
    in_frame: in_frame,
    out_frame: out_frame,
    content: section_content[i]
  });
}

// initialize our site
var site = new Site(settings);
site.init();
