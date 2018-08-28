import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  songLyrics : Array<any> = new Array();
  html : any;
  
  setValue() {
       this.songLyrics =[
        {'songTitle':'Theri – En Jeevan Song Lyrics in Tamil','songLyricst':'<p style="text-align: center;">உன்னாலே எந்நாளும்</p><p style="text-align: center;">என் ஜீவன் வாழுதே</p><p style="text-align: center;">சொல்லாமல் உன் சுவாசம்</p><p style="text-align: center;">என் மூச்சில் சேருதே</p><p style="text-align: center;">உன் கைகள்</p><p style="text-align: center;">கோர்க்கும் ஓர் நொடி</p><p style="text-align: center;">என் கண்கள்</p><p style="text-align: center;">ஓரம் நீர்த்துளி</p><p style="text-align: center;">உன் மார்பில்</p><p style="text-align: center;">சாய்ந்தே சாகத்தோணுதே</p><p style="text-align: center;">ஓ….. ஓ…….. ஓ…….. ஓ……</p><p style="text-align: center;"><p style="text-align: center;">உன்னாலே எந்நாளும்</p><p style="text-align: center;">என் ஜீவன் வாழுதே</p><p style="text-align:center;">சொல்லாமல் உன் சுவாசம்</p><p style="text-align: center;">என் மூச்சில் சேருதே</p><p style="text-align: center;"><p style="text-align:center;">உபயகுசல சிரஜீவன</p><p style="text-align: center;">பிரசுதஹரித மஞ்சுளபர</p><p style="text-align: center;">சித்தாரே</p><p style="text-align:center;">சஞ்சாரே</p><p style="text-align: center;">அதர ருச்சித மதுரிதபக</p><p style="text-align: center;">சுதனகனக பிரசமநிரத</p><p style="text-align:center;">பாங்கல்யே மாங்கல்யே</p><p style="text-align: center;">மமதம சமி சமதசசத</p><p style="text-align: center;">முகமனசுத சுபநலஇவ</p><p style="text-align: center;">சுசுத சகித காமம்</p><p style="text-align: center;">ஹிரகரகித பாவம்</p><p style="text-align: center;">ஆனந்த போகம்</p><p style="text-align:center;">ஆஜீவ காலம்</p><p style="text-align: center;">பாசானு பந்தம்</p><p style="text-align: center;">காலானு காலம்</p><p style="text-align:center;">தெய்வானு சூலம்</p><p style="text-align: center;">காம்யாச்ச சிஜ்ஜின்</p><p style="text-align: center;">காமயே</p><h2 style="text-align:center;">Theri &#8211; En Jeevan Song Lyrics in Tamil</h2><p><iframe width="100%" height="200" src="https://www.youtube.com/embed/96zr8SHW5So?feature=oembed" frameborder="0" allowfullscreen></iframe></p><p style="text-align: center;">விடிந்தாலும் வானம்</p><p style="text-align: center;">இருள்பூச வேண்டும்</p><p style="text-align: center;">மடிமீது சாய்ந்து</p><p style="text-align: center;">கதைபேச வேண்டும்</p><p style="text-align:center;"><p style="text-align: center;">முடியாத பார்வை</p><p style="text-align: center;">நீ வீச வேண்டும்</p><p style="text-align: center;">முழு நேரம் என்மேல்</p><p style="text-align: center;">உன் வாசம் வேண்டும்</p><p style="text-align: center;"><p style="text-align: center;">இன்பம் எதுவரை</p><p style="text-align: center;">நாம் போவோம் அதுவரை</p><p style="text-align: center;">நீ பார்க்க பார்க்க</p><p style="text-align: center;">காதல் கூடுதே</p><p style="text-align: center;">ஓஹோ…. ஓ… ஓ&#8230;</p><p style="text-align: center;">ஓஹோ… ஹோ……</p><p style="text-align: center;"><p style="text-align: center;">உன்னாலே எந்நாளும்</p><p style="text-align: center;">என் ஜீவன் வாழுதே</p><p style="text-align: center;">சொல்லாமல் உன் சுவாசம்</p><p style="text-align: center;">என் மூச்சில் சேருதே</p><p style="text-align: center;"><p style="text-align: center;">ஏராளம் ஆசை</p><p style="text-align: center;">என் நெஞ்சில் தோன்றும்</p><p style="text-align: center;">அதை யாவும் பேச</p><p style="text-align: center;">பல ஜென்மம் வேண்டும்</p><p style="text-align: center;"><p style="text-align: center;">ஓ ஏழேழு ஜென்மம்</p><p style="text-align: center;">ஒன்றாக சேர்ந்து</p><p style="text-align: center;">உன்னோடு இன்றே</p><p style="text-align: center;">நான் வாழ வேண்டும்</p><p style="text-align: center;"><p style="text-align: center;">காலம் முடியலாம்</p><p style="text-align: center;">நம் காதல் முடியுமா</p><p style="text-align: center;">நீ பார்க்க பார்க்க</p><p style="text-align: center;">காதல் கூடுதே</p><p style="text-align: center;">ஓ&#8230; ஓ……. ஓ…… ஓ…</p><p style="text-align: center;"><p style="text-align: center;">உன்னாலே எந்நாளும்</p><p style="text-align: center;">என் ஜீவன் வாழுதே</p><p style="text-align: center;">சொல்லாமல் உன் சுவாசம்</p><p style="text-align: center;">என் மூச்சில் சேருதே</p><p style="text-align: center;"><p style="text-align: center;">உன் கைகள்</p><p style="text-align: center;">கோர்க்கும் ஓர் நொடி</p><p style="text-align: center;">என் கண்கள்</p><p style="text-align: center;">ஓரம் நீர்த்துளி</p><p style="text-align: center;">உன் மார்பில்</p><p style="text-align: center;">சாய்ந்தே சாகத்தோணுதே</p><p style="text-align: center;">ஓ….. ஓ…….. ஓ…….. ஓ…….</p><p style="text-align: center;"><p style="text-align: center;">உன்னாலே எந்நாளும்</p><p style="text-align: center;">என் ஜீவன் வாழுதே</p><p style="text-align: center;">சொல்லாமல் உன் சுவாசம்</p><p style="text-align: center;">என் மூச்சில் சேருதே</p>','comments':[{'userName':'PADDY','userProfile':'http://1.gravatar.com/avatar/71a5731b0ce030bb9e3d258f73ac767f?s=60&d=mm&r=g','commentsDate':'November 1, 2017 at 9:46 am','comments':'thank u'},{'userName':'Abirami','userProfile':'http://1.gravatar.com/avatar/71a5731b0ce030bb9e3d258f73ac767f?s=60&d=mm&r=g','commentsDate':'June 13, 2018 at 10:40 am','comments':'Very nice'},{'userName':'Qwerty','userProfile':'http://1.gravatar.com/avatar/71a5731b0ce030bb9e3d258f73ac767f?s=60&d=mm&r=g','commentsDate':'June 15, 2018 at 9:54 am','comments':'Marvelous'},{'userName':'ceciliya','userProfile':'http://1.gravatar.com/avatar/71a5731b0ce030bb9e3d258f73ac767f?s=60&d=mm&r=g','commentsDate':'June 27, 2018 at 9:40 am','comments':'sema'},{'userName':'Jeyanthi S','userProfile':'http://1.gravatar.com/avatar/71a5731b0ce030bb9e3d258f73ac767f?s=60&d=mm&r=g','commentsDate':'July 1, 2018 at 10:31 pm','comments':'Missing my marriage days'},{'userName':'Kamakshi','userProfile':'http://1.gravatar.com/avatar/71a5731b0ce030bb9e3d258f73ac767f?s=60&d=mm&r=g','commentsDate':'July 29, 2018 at 9:52 am','comments':'Lovely feel Marriage with Loved one'},{'userName':'Kamakshi','userProfile':'http://1.gravatar.com/avatar/71a5731b0ce030bb9e3d258f73ac767f?s=60&d=mm&r=g','commentsDate':'July 29, 2018 at 9:53 am','comments':'Lovely feel Marriage with Loved one'}]}
    ];
    
     this.html = this.sanitizer.bypassSecurityTrustHtml(this.songLyrics[0].songLyricst); 
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer,public loadingCtrl: LoadingController ) {
        var temp = this;
        const loaderDetails = this.loadingCtrl.create({
			content: "Please wait..."
		});
		loaderDetails.present();
        
        setTimeout(function(){
            loaderDetails.dismiss();
            temp.setValue();
        },1500)
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
