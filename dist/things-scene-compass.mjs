import{Ellipse as e,Component as l}from"@hatiolab/things-scene";const t={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"value",name:"value",property:"value"}]};class a extends e{_draw(e){var{value:l=0,fillStyle:t,cx:a,cy:i,rx:s,ry:o}=this.model;e.translate(a,i),e.beginPath(),e.ellipse(0,0,Math.abs(s),Math.abs(o),0,0,2*Math.PI),e.ellipse(0,0,Math.abs(.75*s),Math.abs(.75*o),0,2*Math.PI,0,!0),this.drawStroke(e),this.drawFill(e),e.closePath(),e.beginPath(),e.moveTo(.65*s,0),e.lineTo(0,.09*o),e.lineTo(.65*-s,0),e.lineTo(0,.09*-o),e.moveTo(0,.65*o),e.lineTo(.09*s,0),e.lineTo(0,.65*-o),e.lineTo(.09*-s,0),e.fillStyle=t,e.fill(),e.closePath(),e.beginPath(),e.fillStyle="black",e.font=(s+o)/13+"px arial",e.textBaseline="middle",e.textAlign="center",e.fillText("N",0,.125*o-o),e.fillText("S",0,o-.125*o),e.fillText("W",.125*s-s,0),e.fillText("E",s-.125*s,0),e.beginPath();var n=(l+(this._anim_alpha||0))/50*Math.PI;e.rotate(n),e.moveTo(0,.65*-o),e.lineTo(.13*s,0),e.lineTo(.13*-s,0),e.fillStyle="#F53B3B",e.fill(),e.beginPath(),e.moveTo(0,.65*o),e.lineTo(.13*s,0),e.lineTo(.13*-s,0),e.fillStyle="#3DC0E8",e.fill(),e.rotate(-n),e.beginPath(),e.ellipse(0,0,Math.abs(.15*s),Math.abs(.15*o),0,0,2*Math.PI),e.lineWidth=.013*(s+o),e.strokeStyle="#FFFFFF",e.fillStyle="#3DC0E8",e.fill(),e.stroke(),e.beginPath(),e.ellipse(0,0,Math.abs(.06*s),Math.abs(.06*o),0,0,2*Math.PI),e.fillStyle="#FFFFFF",e.fill(),e.closePath(),e.translate(-a,-i)}_post_draw(e){this.drawText(e)}onchange(e,l){if(e.hasOwnProperty("value")){var t=this,a=e.value-l.value;this._anim_alpha=-a,this.animate({step:function(e){t._anim_alpha=a*(e-1),t.invalidate()},duration:1e3,delta:"elastic",options:{x:2},ease:"out"}).start()}}get nature(){return t}}l.register("compass",a);export{a as Compass};
