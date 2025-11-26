const Navbar = {
		name: "Navbar",
		components:{
			
		},
		data() {
			return {
				isOpen: false, // hamburger aperto/chiuso
				links: [
					{ label: "I nostri corsi", href: "#corsi" },
					{ label: "Partecipa", href: "#partecipa" },
					{ label: "I tecnici", href: "#tecnici" },
					{ label: "Contatti", href: "#contatti" }
				]
			};
		},
		methods: {
			toggleMenu() {
				this.isOpen = !this.isOpen;
			}
		},
		template: `
		  <nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: #FFFFFF;">
				<div class="container-fluid">
			
			<!-- Logo -->
				<a class="navbar-brand fs-4" href="index.html">
				<img src="./images/LogoOrizzontale.jpg" alt="Logo"  class="d-inline-block align-text-middle" style="max-height: 60px;" >
				</a>
			
			<!-- Bottone toggle (hamburger) per mobile -->
				<button class="navbar-toggler" type="button" @click="toggleMenu">
				
				<span class="navbar-toggler-icon"></span>
				</button>
			
			<!-- Link -->
			<transition name="slide">
			<div class="navbar-collapse justify-content-end" id="mainNavbar" v-show="isOpen" ref="collapseContent">
			  <ul class="navbar-nav">
				<li class="nav-item">
				  <a class="nav-link fs-5" href="index.html">Punteggio</a>
				</li>
				
				<li class="nav-item">
				  <a class="nav-link fs-5" href="news.html">Kumite</a>
				</li>
				
			  </ul>
			</div>
			</transition >
		  </div>
			</nav>
	`
	};
//1_yT0gP0rWuaDoToJDGDGz0YmBcf8NAm6X0QTkgf8xPAN
//https://script.google.com/macros/s/AKfycbzHkk5hvEPEEzuU6ryTFbLnWMFGpr_LlvwU5W8wk9PisumuJ4vEk9KWSAUOipbs_CQ/exec
	const { createApp } = Vue;
	
	createApp({
		components: {
			Navbar
		},
		data(){
			return{	
				voto1: 0,
				voto2: 0,
				voto3: 0,
				voto4: 0,
				voto5: 0,
				votoFinale: null
			};
		},
		methods:{
			handleKeyDown(e) {
				if (e.key === 'Enter') {
				this.compute();   
				}
				if(e.key === 'Delete'){
					this.clear();
				}
			},
			compute(){
				if( this.voto1 != null && this.voto2 != null && this.voto3 != null && this.voto4 != null && this.voto5 != null )
				 this.votoFinale= (this.voto1 + this.voto2 + this.voto3 + this.voto4 + this.voto5)/10;
				 
			},
			clear(){
				this.voto1 = null;
				this.voto2 = null;
				this.voto3 = null;
				this.voto4 = null;
				this.voto5 = null;
				this.votoFinale = null;
			},
			getData(){
				fetch("https://script.google.com/macros/s/AKfycbzHkk5hvEPEEzuU6ryTFbLnWMFGpr_LlvwU5W8wk9PisumuJ4vEk9KWSAUOipbs_CQ/exec")
				.then(res => res.json())
				.then(data => {
					console.log("Dati dal foglio:", data);
				});
			}
				
		},
		mounted() {
			window.addEventListener('keydown', this.handleKeyDown);
			
		},
		beforeUnmount() {
			window.removeEventListener('keydown', this.handleKeyDown);
		}

	}).mount('#app');