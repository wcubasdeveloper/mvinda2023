function Util(){}function UpdateTime(n,t,i){var e=document.getElementById("countdown"),f=Number(n),r=0,u;u=setInterval(function(){contadorReloj=f+r,document.getElementById("SpanHora").innerHTML=i+":"+t+":"+(contadorReloj<10?"0"+contadorReloj:contadorReloj),contadorReloj==59&&(clearInterval(u),Util.prototype.Horav2()),r++},1e3)}function fnExcelReport(n,t){var o="SISTEMA WEB CITECTRAN",s="REPORTE ",h="Reporte_exportado",e,c,v,l,f;t!=undefined&&(t.sistema!=undefined&&(o=t.sistema),t.title!=undefined&&(s=t.title),t.filename!=undefined&&(h=t.filename));var r="<table border='2px'><tr bgcolor='#87AFC6'>",y,u=0,p=document.getElementById(n),a=(new Date).toLocaleString(),i="<table>";for(i=i+'<tr><td rowspan="2" colspan="2" width="100px"><img style="width:100px;height:100px;" src="http://opentgps.com/images/logo_mini.png" alt=""/><\/td><td ><b>'+o+"<\/b><\/td><td ><\/td><\/tr>",i=i+'<tr><td rowspan="2">'+s+"<\/td><td>FECHA<\/td><\/tr>",i=i+"<tr><td>"+a+"<\/td><\/tr>",i=i+'<tr><td colspan="4"><\/td><\/tr>',i=i+'<tr><td colspan="4"><\/td><\/tr>',i=i+'<tr><td colspan="4">',e=document.getElementById(n),u=0;u<e.rows.length;u++)r=r+e.rows[u].innerHTML+"<\/tr>";r=r+"<\/table>",r=r.replace(/<A[^>]*>|<\/A>/g,""),r=r.replace(/<input[^>]*>|<\/input>/gi,""),r=r.replace(/<button[^>]*>|<\/button>/gi,""),c=window.navigator.userAgent,v=c.indexOf("MSIE "),i=i+r+"<\/td><\/tr><\/table>",l="data:application/vnd.ms-excel",f=document.createElement("a"),f.href=l+", "+encodeURIComponent(i),f.download=h+".xls",f.click()}var contadorReloj,dateTimeLoop;Util.prototype.ConvertirAMatriz=function(n){var r=String(n).split("*"),u=r.length-1,f=new Array(u);for(j=0;j<=u;j++)f[j]=String(r[j]).split("|");return f},Util.prototype.LimpiarCajas=function(n){$(":input",n).each(function(){var n=this.type,t=this.tagName.toLowerCase();(n=="text"||n=="password"||n=="number"||t=="textarea")&&(this.value="")})},Util.prototype.deshabilitarbotom=function(n){n.attr("disabled","disabled").addClass("disabled")},Util.prototype.habilitarbotom=function(n){n.removeAttr("disabled").removeClass("disabled")},Util.prototype.inicializarFormulario=function(n){n.find("input").val(""),n.find("textarea").val(""),$.each(n.find("select"),function(){var n=$(this).find("option:first").val();$(this).val(n)})},Util.prototype.obtenerTodosLosDiasDeLaSemana=function(){var u=[],t,f,e,i,r;for(Date.prototype.addDays=function(n){var t=new Date(this.valueOf());return t.setDate(t.getDate()+n),t},t=new Date("03-05-2017"),f=t.getDay(),f==0&&(t=t.addDays(-1)),e=t.getDate()-t.getDay(),i=1;i<=7;i++)r=new Date(t.getTime()),r.setDate(e+i),u.push(r);return u},Util.prototype.CargarSelect=function(n,t,i){t.empty(),$.each(n,function(n,i){t.append('<option  value="'+i.Codigo+'"> '+i.Nombre+"<\/option>")}),i==1&&t.append('<option value="0" selected >--Todos--<\/option>')},Util.prototype.CargarSelectVigencia=function(n,t){t.empty(),$.each(n,function(n,i){t.append('<option data-AniosVigencia="'+i.AniosVigencia+'" value="'+i.Codigo+'"> '+i.Nombre+"<\/option>")})},Util.prototype.CargarSelectUnidad=function(n,t,i){t.empty(),$.each(n,function(n,i){t.append('<option  value="'+i.CodUnidad+'"> '+i.PlacaUnidad+"<\/option>")}),i==1&&t.append('<option value="0" selected >--Todos--<\/option>')},Util.prototype.CargarSelectOpcTodos=function(n,t){t.empty(),$.each(n,function(n,i){t.append('<option value="'+i.Codigo+'"> '+i.Nombre+"<\/option>")})},Util.prototype.DimensionarContenedor=function(n,t,i){var r=document.querySelector("#"+n);r.style.width=t,r.style.height=i},Util.prototype.SerializarData=function(n){for(var t="",f=document.getElementById(n).rows,u=null,r,i=0;i<f.length;++i){for(u=f[i].cells,r=0;r<u.length;++r)t=t+u[r].innerHTML+"*";t=t.substring(0,t.length-1),t=t+"|"}return t=t.substring(0,t.length-1)},Util.prototype.Hora=function(){var f,r=new Date,n=r.getHours(),t=r.getMinutes(),i=r.getSeconds(),u;n<10&&(n="0"+n),t<10&&(t="0"+t),i<10&&(i="0"+i),u=n+":"+t+":"+i,document.getElementById("SpanHora").innerHTML=u,f=setTimeout("Util.prototype.Hora()",1e3)},Util.prototype.Horav2=function(){var r=NombreAplicacion+"/./Usuario/getHora",n=0,t=0,i=0;$.post(r,{},function(r){n=r.split(" ")[1].split(":")[2],t=r.split(" ")[1].split(":")[1],i=r.split(" ")[1].split(":")[0],UpdateTime(n,t,i),document.getElementById("SpanHora").innerHTML=r.split(" ")[1]})},Util.prototype.animacion_simple=function(){$(".foto1").fadeIn(tiempo_fade),setTimeout(function(){$(".foto1").fadeOut(tiempo_fade),$(".foto2").fadeIn(tiempo_fade)},tiempo_entre_img),setTimeout(function(){$(".foto2").fadeOut(tiempo_fade),Util.prototype.animacion_simple()},tiempo_entre_img*2)},Util.prototype.animacion=function(){$(".fadein img:gt(0)").hide(),setInterval(function(){$(".fadein :first-child").fadeOut().next("img").fadeIn().end().appendTo(".fadein")},2500)},Util.prototype.Modal=function(n,t,i,r,u,f,e,o,s,h){s==null&&(s="center"),h==null&&(h="center"),n.dialog({height:t,width:i,modal:r,autoOpen:u,closeOnEscape:!0,resizable:f,draggable:e,title:o,open:function(){}})},Util.prototype.BloquearPantalla=function(){$.blockUI({message:"Espere un momento...",css:{border:"none",padding:"15px",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px",opacity:.5,color:"#fff"}})},Util.prototype.DesbloquearPantalla=function(){$.unblockUI()},Util.prototype.obtenerFechaLocal=function(n,t){var i="",r="",e="",o=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],s=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];if(n!=undefined){var u=n.getDate(),f=n.getMonth()+1,e=n.getFullYear();if(i=u<10?"0"+u:""+u,r=f<10?"0"+f:""+f,t==1)return i+"/"+r+"/"+e;if(t==2)return e+""+r+""+i;if(t==3)return i+" "+o[n.getDay()]}return""},Util.prototype.MostrarMensaje=function(n,t){switch(t){case 0:toastr.error(n,{timeOut:3e3});break;case 1:t="green",toastr.success(n,{timeOut:3e3});break;case 2:t="rgb(243, 137, 27)",toastr.warning(n,{timeOut:3e3});break;case 4:t="blue",toastr.info(n,{timeOut:3e3})}},Util.prototype.ObtieneNomArchivoCargado=function(n){n.split(/[\\\/]/g).pop()},Util.prototype.ObtenerFechaActual=function(){var n=new Date,t=n.getDate(),i=n.getMonth()+1,r=n.getFullYear();return t=t<10?"0"+t:t,i=i<10?"0"+i:i,n=t+"/"+i+"/"+r},Util.prototype.ObtenerFechaHoraActual=function(){var n=new Date,t=n.getDate(),i=n.getMonth()+1,f=n.getFullYear(),r=n.getHours(),u=n.getMinutes();return t=t<10?"0"+t:t,i=i<10?"0"+i:i,r=r<10?"0"+r:r,u=u<10?"0"+u:u,n=t+"/"+i+"/"+f+" "+r+":"+u},Util.prototype.LoadingMobile=function(n,t){t=t==!0?"show":"hide",$.mobile.loading(t,{text:n,textVisible:!0,theme:"z",html:""})},Util.prototype.MantenerSeleccion=function(n,t){for(var u=document.getElementById(t),r,i=1;i<u.rows.length;i++)r=u.rows[i],r.className=r.cells[0].textContent==n?"rowSelecionado":""},Util.prototype.Notificacion=function(n){var t='<div id="alerts"><div><img src="http://citectran.com/citec/Images/logo/LogoCitectran2016_.png" align="top" style="width: 85px;" /><\/div><li style="color: white;list-style-type: none;"><div>'+n+"<\/div><\/li><\/div>";$("#alertbox").fadeIn("slow").prepend(t),$("#alerts").delay(5e3).fadeOut("slow")},Util.prototype.envioMensajeMasivo=function(n,t){toastr.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-center",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"2000",timeOut:"500000",extendedTimeOut:"2000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},toastr.info(n,t)},Util.prototype.SumarFecha=function(){var t=new Date;new Date(t.getTime()+220752e6)},Util.prototype.SoloDecimal=function(n,t,i){if(key=n.keyCode?n.keyCode:n.which,key==8)return!0;if(key>47&&key<58)return t.value==""?!0:(regexp=/.[0-9]{7}$/,!regexp.test(t.value));if(key==46)return t.value==""?!1:(regexp=/^[0-9]+$/,regexp.test(t.value));if(i&&key==13){var u=$(t).attr("id"),r=u.split("-"),f=r[0],e=parseInt(r[1])+1;$("#"+f+"-"+e).selectRange(0,9999)}return!1},Util.prototype.SoloNumero=function(n,t){var i=n.which?n.which:n.keyCode,f;if(i==13||i>31&&(i<48||i>57)||t.value.length==20)return!1;if(i==13){var e=$(t).attr("id"),u=e.split("-"),o=u[0],s=parseInt(u[1])+1,r=$("#"+o+"-"+s);r.focus(),r.val()!=null&&(f=3,SeleccionRangoInput(r,f))}return!0},Util.prototype.NoTab=function(n){var i=n.keyCode||n.which;i==9&&n.preventDefault()},Util.prototype.FormatYearTwo=function(n){return n.split("/")[0]+"/"+n.split("/")[1]+"/"+n.split("/")[2].substring(2)},Util.prototype.ExportarExcel=function(n,t,i,r){var u={sistema:n,title:t,filename:i};fnExcelReport(r,u)},Util.prototype.conectarServicioLocal=function(){var n,t="ws://"+urlServicioHora+"/svrHoraLocal/SimpleEventoDeServicio.ashx";n=new WebSocket(t),n.onopen=function(){},n.onmessage=function(n){var t=window.JSON.parse(n.data);$("#SpanHora").html(n.data.replace('"',"").replace('"',""))}},Util.prototype.GuardarJson=function(n,t){var i=new Date,u=t+i.getDate()+"/"+(i.getMonth()+1)+"/"+i.getFullYear()+" "+i.getHours()+":"+i.getMinutes()+":"+i.getSeconds();if(!n){console.error("Console.save: No data");return}u||(u="console.json"),typeof n=="object"&&(n=JSON.stringify(n,undefined,4));var e=new Blob([n],{type:"text/json"}),f=document.createEvent("MouseEvents"),r=document.createElement("a");r.download=u,r.href=window.URL.createObjectURL(e),r.dataset.downloadurl=["text/json",r.download,r.href].join(":"),f.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(f)},Util.prototype.ActualizarHoraServidor=function(n){dateTimeLoop="";var t=new Date(Date.parse(n)),r,f,u=t.getMonth()+1,e,i;t.setSeconds(t.getSeconds()+1),i=(t.getHours()<=9?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<=9?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<=9?"0"+t.getSeconds():t.getSeconds()),dateTimeLoop=t.getFullYear()+"/"+u+"/"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),$("#SpanHora").text(i),r=setTimeout("Util.prototype.ActualizarHoraServidor(dateTimeLoop)",1e3)},Util.prototype.InicializarArreglo=function(n,t){for(var i=[t],r=[];n>0;)n&1&&(r=r.concat(i)),i=i.concat(i),n>>>=1;return r},Util.prototype.actualizarIndiceTabla=function(n,t){var i=0;$.each(n,function(){i++;var n=$(this).find("td")[t];$(n).text(i)})},Util.prototype.setInformacionEnContenedor=function(n,t){var i,r=3e3;$(".closealert").click();switch(t){case"informacion":n.append('<div class="alert alert-info fade in alert-dismissable" style="padding: 0;margin: 0;position: absolute;left: 0;right: 0;padding-top: 6px;padding-bottom: 6px;text-align: center;"><a href="#" class="close closealert" data-dismiss="alert" style="position: absolute;right: 9px;" aria-label="close" title="close">×<\/a><section>Cargando <img src="../../../'+nombreSubdominio+'/Images/puntos-suspensivos.gif" /><\/section><\/div>');break;case"advertencia":n.append('<div class="alert alert-warning fade in alert-dismissable" style="padding: 0;margin: 0;position: absolute;left: 0;right: 0;padding-top: 6px;padding-bottom: 6px;text-align: center;"><a href="#" class="close closealert" data-dismiss="alert" style="position: absolute;right: 9px;" aria-label="close" title="close">×<\/a><section>No se ha encontrado información en la base de datos.<\/section><\/div>');break;case"success":n.append('<div class="alert alert-success fade in alert-dismissable" style="padding: 0;margin: 0;position: absolute;left: 0;right: 0;padding-top: 6px;padding-bottom: 6px;text-align: center;"><a href="#" class="close closealert" data-dismiss="alert" style="position: absolute;right: 9px;" aria-label="close" title="close">×<\/a><section>La información cargó correctamente.<\/section><\/div>'),r=3e3,clearTimeout(i),i=setTimeout(function(){$(".closealert").click()},r);break;case"error":n.append('<div class="alert alert-danger fade in alert-dismissable" style="padding: 0;margin: 0;position: absolute;left: 0;right: 0;padding-top: 6px;padding-bottom: 6px;text-align: center;"><a href="#" class="close closealert" data-dismiss="alert" style="position: absolute;right: 9px;" aria-label="close" title="close">×<\/a><section>Ocurrió un error al cargar la información.<\/section><\/div>');break;case"presionaprocesar":n.append('<div class="alert alert-info fade in alert-dismissable" style="padding: 0;margin: 0;position: absolute;left: 0;right: 0;padding-top: 6px;padding-bottom: 6px;text-align: center;"><a  href="#" class="close closealert" data-dismiss="alert" style="position: absolute;right: 9px;" aria-label="close" title="close">×<\/a><section>Presionar el boton procesar<\/section><\/div>')}},Util.prototype.pintarFila=function(n){$(".opcion").parent().parent().css("background-color",""),n.parent().parent().css("background-color","#c1c1c1")}