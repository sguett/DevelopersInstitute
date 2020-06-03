class Video{
    constructor(title,uploader,seconds) {
        this.title = title ;
        this.uploader = uploader;
        this.seconds = seconds;
      }

    watch(){
        return this.uploader + " watched all "+ this.seconds +"seconds of "+this.title+"!"
    }
}

let newVideo = new Video("X men","Samuel",180)
console.log(newVideo.watch())


class rating extends Video {
    constructor(title, uploader, seconds, rated) {
      super(title, uploader, seconds);
      this.rated = rated;
    }
  
    ratedTitle() {
      return this.title + " is rated "+ this.rated
    }
  }
let ratedVideo = new rating("X men", "Samuel",180, "G");
console.log(ratedVideo.ratedTitle());


let allVideo = [{
    title: "Elephant man",
    uploader: "Simon",
    seconds: 1805
}, {
    title: "Captain America",
    uploader: "Michel",
    seconds: 60
},{
    title: "The Lion King",
    uploader: "Anna",
    seconds: 220
},{
    title: "The Mask",
    uploader: "Lucie",
    seconds: 442
},{
    title: "Avengers",
    uploader: "Alex",
    seconds: 1119
}
]

function funcVideo({ title, uploader, seconds } = video) {
    let temp = new Video(title,uploader,seconds)
    console.log(temp.watch())
}

allVideo.forEach((val) => { 
    return funcVideo(val) 
})