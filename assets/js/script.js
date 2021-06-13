class Multimedia{
    constructor(url){
        let _url = url
        this._getUrl = () => {return _url}
        this._setUrl = (nuevaurl) => {_url = nuevaurl}
    }
    get url(){
        return this._getUrl()
    }
    set url(nuevaUrl){ 
        this._setUrl(nuevaUrl)

    }
    setInicio(){
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        let _id = id
        this._getId = () => _id
        this._setId = (nuevoId) => {_id = nuevoId}
    }
    get id(){
        return this._getId()
    }
    playMultimedia(){
        iife.funcionPublica(this.url,this.id)
    }
    setInicio(tiempo){
        this.url = `${this.url}?start=${tiempo}` //esto implica la creacion del set url de Multimedia
    }
}

const divMusica = document.querySelector("#musica")
const divPeliculas = document.querySelector("#peliculas")
const divSeries = document.querySelector("#series")


//IIFE (????)
const iife = (() => {
    const funcionPrivada = (url,id) =>{
        let iFrameDelId = document.querySelector(`#${id} iframe`);
        iFrameDelId.setAttribute("src", url);
    }

    return{
        funcionPublica: (url,id) =>{
            funcionPrivada(url,id)
        }
    }
}
)()

const reproductorMusica = new Reproductor("https://www.youtube.com/embed/1kh81rhmglw", "musica")
reproductorMusica.playMultimedia()
//hay que meter el iframe de forma dinamica??

const reproductorPelicula = new Reproductor("https://www.youtube.com/embed/EoQuVnKhxaM", "peliculas")
reproductorPelicula.playMultimedia()

const reproductorSerie = new Reproductor("https://www.youtube.com/embed/Eq6EYcpWB_c","series")
reproductorSerie.setInicio(10)
reproductorSerie.playMultimedia()
