const { createApp } = Vue;


createApp({
  data () {
    return {
        users :  [{
            name: 'Michele',
            avatar: 'img/avatar_1.jpg',
            visible: true,

            messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
            ],
          },

          {
            name: 'Fabio',
            avatar: 'img/avatar_2.jpg',
            visible: true,

            messages: [{
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
            ],
          },

          {
            name: 'Samuele',
            avatar: 'img/avatar_3.jpg',
            visible: true,

            messages: [{
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
            ],
          },

          {
            name: 'Luisa',
            avatar: 'img/avatar_4.jpg',
            visible: true,

            messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
            ],
          },
          {
            name: 'Ludovico',
            avatar: 'img/avatar_5.jpg',
            visible: true,

            messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che parto?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei che tu restassi',
              status: 'received'
            }
            ],
          },
          {
            name: 'Daniela',
            avatar: 'img/avatar_6.jpg',
            visible: true,

            messages: [{
              date: '10/01/2020 15:30:55',
              message: 'andiamo a correre domani mattina?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ma sei pazza non ci penso proprio devo finire dei lavori per gian luca',
              status: 'received'
            },
            {
              date: '10/01/2020 15:55:00',
              message: 'Va bene non ti chiamerò più',
              status: 'sent'
            }
            ],
          },
          {
            name: 'Giovanni',
            avatar: 'img/avatar_7.jpg',
            visible: true,

            messages: [{
              date: '10/01/2020 15:30:55',
              message: 'Ceniamo insieme a Mirko e valentina Stasera?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ma c é la partita questa sera te l eri dimenticato?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Hai pienamente ragione mi era sfuggito di mente che faccio disdico?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Niente non ti preoccupare per una volta posso anche saltarla',
              status: 'received'
            }
            ],
          },
          {
            name: 'Ermegildo',
            avatar: 'img/avatar_8.jpg',
            visible: true,

            messages: [{
              date: '10/01/2020 15:30:55',
              message: 'A che ora pensi di liberarti?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Verso le 19 credo vai a fare la spesa se hai terminato di lavorare!',
              status: 'received'
            }
            ],
          },
          
          
          ],

          rispostaMessaggio : [
            { 
              risposta : "Buon giorno a te, ti sei ripreso dopo ieri sera?"
            },
            { 
              risposta : 'Non preoccuparti fa niente'
            },
            {
              risposta : 'Chi sei? forse hai sbagliato chat!'
            },
            {
              risposta : 'Dai stavo scherzando, dimmi tutto.'
            },
            {
              risposta : 'sono a lavoro non posso chattare ci sentiamo più tardi, ti scrivo io quando finisco'
            },
          ],

        currentIndex : -1,
        newMessage : '',
        createdOra : new Date().toLocaleTimeString(),
        createdData : new Date().toLocaleDateString(),
        dataVisible :  this.currentIndex,
        currentMessage : -1,
        searchText : "",
        chev : false,
        
};
  },
  methods : {

    onChatClick (index){
        this.currentIndex = index;
        
    },

    onInputMessage (currentIndex) {
      if (this.newMessage !== "") {

        
        this.users[currentIndex].messages.push({
          date : (this.createdData+ ' ' + new Date().toLocaleTimeString() ),
          message : this.newMessage,
          status : 'sent'
        });

        setTimeout(() => {
          
          this.users[currentIndex].messages.push({
            date : ( this.createdData + ' ' + new Date().toLocaleTimeString() ),
            message : this.rispostaMessaggio[this.getRandom(0 , 4)].risposta,
            status : 'received'
          });
          
        }, 1500);

        this.newMessage= '';
      }

    },
      getRandom(min, max) {
      const random = Math.floor(Math.random() * (max - min + 1) + min);
      return random;
    },
    deleteMessage(indexDelete){

        this.users[this.currentIndex].messages.splice(indexDelete, 1);
        this.chev = false;
        this.currentMessage = -1;
      
    },
    clickchev(index) {
      //const newChev = this.users[this.currentIndex].messages
      this.currentMessage = index;

      if (this.currentMessage === index) {
        this.chev = true
      }
      

    },
    closechev(){
      this.chev = false;
      this.currentMessage = -1;
    },
    leaveMouse() {
      this.chev = false
    },
    changeOra (orarioNow) {
      orarioNow = new Date().toLocaleTimeString()
    }




  },
  mounted () {
    

    
  },
  computed : {
    searchUser () {
      this.currentIndex = -1
      return this.users.filter(user => {

        return user.name.toLowerCase().includes(this.searchText.toLowerCase())
        
      });
    }
  }
}).mount("#app");