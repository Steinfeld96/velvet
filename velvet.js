/* =====================================================
   EVENTOS VELVET
===================================================== */


const eventos = {


    /* =================================================
       EVENTO 1
    ================================================= */

    evento1: {

        categoria: "VELVET FRIDAY",

        titulo: "VELVET FRIDAY",

        data: "12 SET 2026",

        horario: "23:00 — 04:00",

        descricao:
            "Uma sexta-feira para começar o fim de semana do jeito certo. Funk, Pop, Dancehall e muita energia na pista da Velvet.",


        djs: [


            {
                horario: "23:00 — 00:00",

                nome: "DJ LUNA",

                estilo:
                    "POP • DANCE • HITS",

                instagram:
                    "@djluna.pg",

                link:
                    "https://www.instagram.com/djluna.pg/"
            },


            {
                horario: "00:00 — 01:30",

                nome: "DJ VENOM",

                estilo:
                    "FUNK • TRAP • HIP HOP",

                instagram:
                    "@djvenom.pg",

                link:
                    "https://www.instagram.com/djvenom.pg/"
            },


            {
                horario: "01:30 — 03:00",

                nome: "SAINT",

                estilo:
                    "FUNK • FUNKHALL • BRAZILIAN BASS • POP • HIP HOP • RAP 2000s",

                instagram:
                    "@saint.dj",

                link:
                    "https://www.instagram.com/saint.dj/"
            },


            {
                horario: "03:00 — 04:00",

                nome: "DJ NOIR",

                estilo:
                    "DANCEHALL • HOUSE • BRAZILIAN BASS",

                instagram:
                    "@djnoir.pg",

                link:
                    "https://www.instagram.com/djnoir.pg/"
            }


        ]

    },



    /* =================================================
       EVENTO 2
    ================================================= */

    evento2: {

        categoria: "AFTER DARK",

        titulo: "AFTER DARK",

        data: "19 SET 2026",

        horario: "23:00 — 05:00",

        descricao:
            "Depois da meia-noite, a Velvet muda de frequência. Uma noite mais intensa, com graves pesados, Funkhall, House, Pop e sons que dominam a madrugada.",


        djs: [


            {
                horario: "23:00 — 00:30",

                nome: "DJ NOIR",

                estilo:
                    "HOUSE • DANCE • BRAZILIAN BASS",

                instagram:
                    "@djnoir.pg",

                link:
                    "https://www.instagram.com/djnoir.pg/"
            },


            {
                horario: "00:30 — 02:00",

                nome: "DJ VENOM",

                estilo:
                    "TRAP • HIP HOP • FUNK",

                instagram:
                    "@djvenom.pg",

                link:
                    "https://www.instagram.com/djvenom.pg/"
            },


            {
                horario: "02:00 — 04:00",

                nome: "SAINT",

                estilo:
                    "FUNK • FUNKHALL • BRAZILIAN BASS • HIP HOP • RAP 2000s",

                instagram:
                    "@saint.dj",

                link:
                    "https://www.instagram.com/saint.dj/"
            },


            {
                horario: "04:00 — 05:00",

                nome: "DJ LUNA",

                estilo:
                    "POP • DANCE • HOUSE",

                instagram:
                    "@djluna.pg",

                link:
                    "https://www.instagram.com/djluna.pg/"
            }


        ]

    }


};



/* =====================================================
   ABRIR MODAL
===================================================== */


function abrirEvento(id) {


    const evento = eventos[id];


    if (!evento) {

        console.error(
            "Evento não encontrado:",
            id
        );

        return;

    }



    /* =========================
       INFORMAÇÕES
    ========================= */


    document
        .getElementById("modalCategoria")
        .textContent =
        evento.categoria;



    document
        .getElementById("modalTitulo")
        .textContent =
        evento.titulo;



    document
        .getElementById("modalData")
        .textContent =
        evento.data;



    document
        .getElementById("modalHorario")
        .textContent =
        evento.horario;



    document
        .getElementById("modalDescricao")
        .textContent =
        evento.descricao;



    /* =========================
       LINE-UP
    ========================= */


    const lineup =
        document.getElementById(
            "modalLineup"
        );


    lineup.innerHTML = "";



    evento.djs.forEach(function (dj) {


        const item =
            document.createElement("div");


        item.className =
            "dj-item";



        item.innerHTML = `

            <div class="dj-horario">
                ${dj.horario}
            </div>


            <div class="dj-principal">

                <div class="dj-nome">
                    ${dj.nome}
                </div>


                <a
                    href="${dj.link}"
                    target="_blank"
                    rel="noopener"
                    class="dj-instagram"
                >
                    ${dj.instagram}
                </a>

            </div>


            <div class="dj-estilo">
                ${dj.estilo}
            </div>

        `;



        lineup.appendChild(item);


    });



    /* =========================
       ABRIR
    ========================= */


    const modal =
        document.getElementById(
            "eventoModal"
        );


    modal.classList.add("ativo");


    document.body.style.overflow =
        "hidden";


}



/* =====================================================
   FECHAR MODAL
===================================================== */


function fecharEvento() {


    const modal =
        document.getElementById(
            "eventoModal"
        );


    modal.classList.remove("ativo");


    document.body.style.overflow =
        "";


}



/* =====================================================
   ESC PARA FECHAR
===================================================== */


document.addEventListener(
    "keydown",
    function (event) {


        if (
            event.key === "Escape"
        ) {

            fecharEvento();

        }


    }
);