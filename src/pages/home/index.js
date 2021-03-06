import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faExclamationCircle,
faMinusCircle, faBroadcastTower, faLevelDownAlt,
faFireAlt } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/header';
import Footer from '../../components/footer';
import WhatsappButton from '../../components/whatsappButton';
import Popup from "../../components/popUp"

//imagens
import Robozin from '../../img/robozinho.png';
import Robozinha from '../../img/robozinha.png';
import PlugAndPlay from '../../img/plugandplay.png'
import Monitoramento from '../../img/monitoramento.png';
import Gestaodeativos from '../../img/gestaodeativos.png';
import Envio from '../../img/envio.png'
import Cola from '../../img/cola.png';
import Receba from '../../img/receba.png';
import CincoEstrelas from '../../img/cincoestrelas.png';
import ProfilePic from '../../img/profilepic.jpg';
import LeoeMih from '../../img/leoemih.png';
import LogoTigre from '../../img/logo-tigre-2.png';
import LogoPirelli from '../../img/logo-pirelli-2.png';
import LogoYara from '../../img/logo-yara-2.png';
import LogoMarilan from '../../img/logo-marilan-2.png';
import LogoAirLiquid from '../../img/logo-air-liquide-2.png';
import LogoArcelor from '../../img/logo-arcelor-2.png';
import LogoSuzano from '../../img/logo-suzano-2.png';
import LogoIochpemaxiom from '../../img/logo-iochpemaxion.png';
import LogoCiser from '../../img/logo-ciser.png';
import LogoMaster from '../../img/logo-master.png';
import LogoAlbras from '../../img/logo-albras-3.png';
import LogoElectrolux from '../../img/logo-electrolux.png';
import LogoFaberCastel from '../../img/logo-faber-castell-2.png';
import LogoEmbraer from '../../img/logo-embraer.png';


function Home() {

    return (
        <section id="homeBody">

            <Header/>
            <nav>
                <div className="textWrapper"> 
                    <h1> Completo e eficiente. </h1>
                    <h2> O nosso sistema preditivo que te d?? produtividade e evita falhas, te dando seguran??a para trabalhar! </h2>
                    <button id="glowOnHover" type="button">SAIBA MAIS!</button>
                    <h3>J?? ?? cliente? <Link to="/">Acesse aqui.</Link></h3>
                </div>

                <img draggable="false" src={Robozin} alt=""/>

            </nav>

            <section id="whyTractian">
                <h1> Por que a Tractian? </h1>

                <div id="rowObjects">
                    <img draggable="false" src={Robozinha} alt=""/>

                    <div className="cardsWrapper">

                        <div className="whyCards">
                            <h2>Manuten????o Preditiva</h2>
                            <p>Detec????o autom??tica de falhas, sa??de do ativo em tempo real, confiabilidade e insights autom??ticos.</p>
                        </div>

                        <div className="whyCards">
                            <h2>Automa????o de OS</h2>
                            <p>Automatize a gera????o de ordens de servi??o com base em horas ou em dias e melhore a sua preventiva.</p>
                        </div>

                        <div className="whyCards">
                            <h2>Monitoramento Online</h2>
                            <p>Sensor Tractian coleta dados de vibra????o, temperatura, hor??metro e consumo de energia em tempo real.</p>
                        </div>

                        <div className="whyCards">
                            <h2>Setup Instant??neo</h2>
                            <p>Solu????o Plug & Play, sem necessidade de gateways ou roteadores, comunica????o via 2G/3G independente.</p>
                        </div>

                    </div>

                </div>

                <h2>Sua m??quinas mais seguras, com a nossa ajuda.</h2>


                <div className="dataWhy">

                    <div className="dataCard">
                        <h3>90%</h3>
                        <p>DE ASSERTIVIDADE DOS INSIGHTS GERADOS PELA PLATAFORMA.</p>
                    </div>

                    <div class="dataCard">
                        <h3>45%</h3>
                        <p>AUMENTO DE CONFIABILIDADE DAS M??QUINAS COM SISTEMA TRACTIAN.</p>
                    </div>

                    <div class="dataCard">
                        <h3>30%</h3>
                        <p>REDU????O DAS OCORR??NCIAS DE ??LTIMA HORA NA MANUTEN????O.</p>
                    </div>

                </div>

                <section id="achievements">

                    <img draggable="false" src={CincoEstrelas} alt=""/>
                    <h2>#1 Em solu????es para Manuten????o.</h2>

                    <div className="feedbacks">
                        <div className="clientText">

                            <img src={ProfilePic} alt=""/>
                            <h3>"O dispositivo traz mais confiabilidade ao processo, agilizando a an??lise de informa????es e evitando paradas na produ????o, o que impacta positivamente a produtividade."</h3>
                            <div>
                                <h4>Eduarda Buaiz</h4>
                                <p>Diretora Geral - Ind??stria Aliment??cia</p>
                            </div>

                        </div>
                        <div className="clientText">

                            <img src={ProfilePic} alt=""/>
                            <h3>"Uma crian??a pode instalar o sensor da Tractian, e a plataforma ?? t??o f??cil de usar quanto uma rede social. Todo sistema ?? muito simples e confi??vel."</h3>
                            <div>
                                <h4>Ren?? Santos</h4>
                                <p>T??cnico Mec??nico - Ind??stria Cervejeira</p>
                            </div>

                        </div>
                        <div className="clientText">

                            <img src={ProfilePic} alt=""/>
                            <h3>"Antes da Tractian, a falha acontecia sem que n??s tiv??ssemos nenhuma chance de rea????o. Agora n??s conseguimos identificar qualquer anomalia fora do normal e isso nos permite fazer a interven????o antes que a quebra aconte??a."</h3>
                            <div>
                                <h4>Tiago Junqueira</h4>
                                <p>Supervisor de Manuten????o Geral - AmstedMaxion</p>
                            </div>

                        </div>
                        <div className="clientText">

                            <img src={ProfilePic} alt=""/>
                            <h3>"Com a Tractian otimizamos tempo, reduzimos custo com falhas antecipadas pela solu????o. A tecnologia deles ?? uma grande ferramenta no acompanhamento e gest??o dos nossos ativos que s??o um dos patrim??nios da empresa."</h3>
                            <div>
                                <h4>Gustavo Ribeiro</h4>
                                <p>Diretor Industrial - Ind??stria Gerenciamento de Res??duos</p>
                            </div>

                        </div>

                    </div>

                </section>                

                <button id="glowOnHover" type="button">FA??A A ESCOLHA CERTA!</button>
            </section>

            <section id="howItWorks">

                <h1>Como funciona?</h1>

                <h2>Mantenha a sua equipe e seus ativos com o <b>melhor desempenho</b></h2>

                <p>Descomplicamos a manuten????o preditiva evitando v??rios problemas:</p>

                <div className="problemsSolved">

                    <div className="example">

                        <img draggable="false" src={PlugAndPlay} alt=""/>

                        <div className="mobileAdjust">

                            <h2>Sensor Plug & Play</h2>
                            <h3>Sem gateway, sem enrola????o</h3>
                            <p>
                                Nossos sensores enviam dados do seu equipamento atrav??s de rede 2g/3g pensando na facilidade de implementa????o.
                                Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condi????o da sua m??quina.
                            </p>

                        </div>
                    </div>

                    <div className="exampleReverse">

                        <img draggable="false" src={Monitoramento} alt=""/>

                        <div className="mobileAdjust">

                            <h2>Monitoramento Online</h2>
                            <h3>Plataforma que trabalha por voc??</h3>
                            <p>
                                A plataforma oferece uma vis??o ampla da condi????o da sua m??quina.
                                Insights autom??ticos, detec????o de folgas mec??nica, desalinhamento, desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de m??quina.
                            </p>

                        </div>
                    </div>
                    
                    <div className="example">

                        <img draggable="false" src={Gestaodeativos} alt=""/>

                        <div className="mobileAdjust">

                            <h2>Gest??o de Ativos</h2>
                            <h3>Ordens de servi??o automatizadas</h3>
                            <p>
                                Pare de estimar dias de funcionamento para manuten????o preventiva.
                                Com o hor??metro dos nossos sensores, nossa plataforma gera ordens de servi??os autom??ticas com base em horas de funcionamento.
                            </p>

                        </div>

                    </div>                    

                </div>

                <section id="sellPhases">

                    <div className="sellStoryline">

                        <div id="A" className="storylineText">

                            <img draggable="false" src={Envio} alt=""/>
                            <h3>N??s enviamos os sensores</h3>
                            <span>Fazemos a entrega pelos Correios para o Brasil todo. Voc?? recebe o sensor na sua empresa. N??o necessita passar pelo Wi-Fi industrial e nem falar com a TI.</span>

                        </div>

                        <div id="B" className="boxStoryline">

                            <h1>1</h1>

                        </div>

                        <div id="C" className="boxStoryline">

                            <h1>2</h1>

                        </div>

                        <div id="D" className="storylineText">

                            <img draggable="false" src={Cola} alt=""/>
                            <h3>Cole em suas m??quinas</h3>
                            <span>Nosso sensor ?? colado na m??quina como um bandaid. Ele ?? respons??vel por transmitir os dados de vibra????o e temperatura do equipamento para a plataforma.</span>

                        </div>

                        <div id="E" className="storylineText">

                            <img draggable="false" src={Receba} alt=""/>
                            <h3>Receba Insights valiosos</h3>
                            <span>Nosso sistema centraliza informa????es precisas sobre suas m??quinas, com insights e an??lises, como sa??de do equipamento, detec????o de anomalias e varia????o de espectros.</span>

                        </div>

                        <div id="F" className="boxStoryline">

                            <h1>3</h1>

                        </div>

                    </div>

                </section>

                <div className="detectedProblems">

                    <h1>Detectamos seus problemas com precis??o.</h1>
                    <div className="gridProblems">

                        <div className="problem">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="exclamationTriangle" />
                            <h4>Desalinhamento</h4>
                        </div>

                        <div className="problem">
                            <FontAwesomeIcon icon={faExclamationCircle} className="exclamationCircle" />
                            <h4>Desbalanceamento</h4>
                        </div>

                        <div className="problem">
                            <FontAwesomeIcon icon={faMinusCircle} className="minusCircle" />
                            <h4>Folga Mec??nica</h4>
                        </div>

                        <div className="problem">
                            <FontAwesomeIcon icon={faFireAlt} className="fireAlt" />
                            <h4>Temperatura Anormal</h4>
                        </div>

                        <div className="problem">
                            <FontAwesomeIcon icon={faBroadcastTower} className="broadcastTower" />
                            <h4>Vibra????o Anormal</h4>
                        </div>

                        <div className="problem">
                            <FontAwesomeIcon icon={faLevelDownAlt} className="levelDownAlt" />
                            <h4>Parada Inesperada</h4>
                        </div>

                    </div>
                </div>

                <div className="schedule">
                    <input placeholder="E-mail profissional"></input>
                    <button id="glowOnHover" type="button">AGENDE UMA DEMO</button>
                </div>
                
                <h3>E mais! Descbura o quanto voc?? economiza com a nossa solu????o!!</h3>
                <button id="glowOnHover" type="button">USE NOSSA CALCULADORA E DESCUBRA!</button>

            </section>

            <section id="workAndBLog">

                <div className="workWithUs">
                    <h1>ENTRE PARA A EQUIPE!</h1>
                    <img draggable="false" src={LeoeMih} alt=""/>
                    <p>Veja as vagas e seja parte de uma equipe de alta performance.</p>
                    <button id="glowOnHover" type="button">CONFIRA AS VAGAS!</button>
                </div>
                
                <div className="seeTheBlog">
                    <h1>Novidades no Blog</h1>
                    <p>Como funciona o sensor de monitoramento online da TRACTIAN?</p>
                    <p>Saiba tudo sobre a gest??o de ativos industriais</p>
                    <p>Conhe??a as 10 causas mais comuns em motores el??tricos e saiba como evit??-las</p>
                    <button className="blogButton" type="button">Ir para o Blog</button>
                </div>
                
            </section>

            <section id="finalContent">
                <form className="demoForm">

                    <h1>Melhore a sua manuten????o!</h1>
                    <p>Preencha o formul??rio para uma demonstra????o.</p>

                    <input id="inputID" type="text" className="textBox" placeholder="Nome*"/>

                    <input id="inputID" type="text" className="textBox" placeholder="Seu E-mail*"/>

                    <input id="inputID" type="text" className="textBox" placeholder="Seu Cargo*"/>

                    <input id="inputID" type="text" className="textBox" placeholder="Telefone*"/>
                    
                    <div className="buttonsForm">
                        <button id="glowOnHover" type="submit">ENVIAR</button>
                    </div>

                </form>

                <h2>Conhe??a nossos parceiros (Clientes?)</h2>
                <div className="partnersLogos">
                    <img draggable="false" src={LogoYara} alt=""/>
                    <img draggable="false" src={LogoPirelli} alt=""/>
                    <img draggable="false" src={LogoTigre} alt=""/>
                    <img draggable="false" src={LogoMarilan} alt=""/>
                    <img draggable="false" src={LogoAirLiquid} alt=""/>
                    <img draggable="false" src={LogoArcelor} alt=""/>
                    <img draggable="false" src={LogoSuzano} alt=""/>
                    <img draggable="false" src={LogoIochpemaxiom} alt=""/>
                    <img draggable="false" src={LogoCiser} alt=""/>
                    <img draggable="false" src={LogoMaster} alt=""/>
                    <img draggable="false" src={LogoAlbras} alt=""/>
                    <img draggable="false" src={LogoElectrolux} alt=""/>
                    <img draggable="false" src={LogoFaberCastel} alt=""/>
                    <img draggable="false" src={LogoEmbraer} alt=""/>
                </div>
            </section>

            <Popup />
            <WhatsappButton />
            <Footer />
        </section>
    )

} export default Home;