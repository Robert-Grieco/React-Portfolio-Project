import React from "react";
import "./App.css";

function App() {
  return (
    <div classNameName="App">
      <header className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1>TOKYO NOVA CHARACTER GENERATOR</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <form>
          <fieldset>
            <div className="form-row">
              <div className="col-md-10">
                <legend>CHARACTER IMAGE</legend>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile"
                    />
                    <label
                      className="custom-file-label"
                      for="inputGroupFile"
                      aria-describedby="inputGroupFileAddon"
                    >
                      Upload an image of your character.
                    </label>
                  </div>
                  <div className="input-group-append">
                    <span className="input-group-text" id="inputGroupFileAddon">
                      Upload
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-10">
                <legend>CHARACTER DETAILS</legend>
              </div>
              <div className="form-group col-md-12">
                <label for="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your character's full name"
                  required
                />
              </div>
              <div className="form-group col-md-10">
                <label>Gender:</label>
                <input type="radio" id="woman" name="gender" value="woman" />
                <label for="woman">Woman</label>
                <input type="radio" id="man" name="gender" value="man" />
                <label for="man">Man</label>
                <input
                  type="radio"
                  id="transgender"
                  name="gender"
                  value="transgender"
                />
                <label for="transgender">Transgender</label>
                <input
                  type="radio"
                  id="nonbinary"
                  name="gender"
                  value="nonbinary"
                />
                <label for="nonbinary">Nonbinary</label>
                <input type="radio" id="other" name="gender" value="other" />
                <label for="other">Other</label>
              </div>
              <div className="form-group col-md-10">
                <label for="age">Age:</label>
                <input type="text" id="age" name="age" />
              </div>
              <div className="form-group col-md-10">
                <label for="height">Height:</label>
                <input type="text" id="height" name="height" />
              </div>
              <div className="form-group col-md-10">
                <label for="weight">Weight:</label>
                <input type="text" id="weight" name="weight" />
              </div>
              <div className="form-group col-md-10">
                <label for="hair">Hair Color:</label>
                <input type="text" id="hair" name="hair" />
              </div>
              <div className="form-group col-md-10">
                <label for="eye">Eye Color:</label>
                <input type="text" id="eye" name="eye" />
              </div>
              <div className="form-group col-md-10">
                <label for="skin">Skin Color:</label>
                <input type="text" id="skin" name="skin" />
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-10">
                <legend>Character Attributes</legend>
              </div>
              <div className="form-group col-md-10">
                <label for="lifepathOne">Lifepath: Origin</label>
                <select id="lifepathOne" name="lifepathOne">
                  <option value="joker1">Magician</option>
                  <option value="two1">Born on the Battlefield</option>
                  <option value="three1">Street Child</option>
                  <option value="four1">Underworld</option>
                  <option value="five1">Orphan</option>
                  <option value="six1">Criminal</option>
                  <option value="seven1">Police</option>
                  <option value="eight1">Genius</option>
                  <option value="nine1">Culturally Pure</option>
                  <option value="ten1">Clone</option>
                  <option value="jack1">Rich Kid</option>
                  <option value="queen1">Technomancer</option>
                  <option value="king1">Middle className</option>
                  <option value="ace1">Celestial</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label for="lifepathTwo">Lifepath: Experience</label>
                <select id="lifepathTwo" name="lifepathTwo">
                  <option value="joker2">Foreigner</option>
                  <option value="two2">Criminal</option>
                  <option value="three2">Media</option>
                  <option value="four2">Veteran</option>
                  <option value="five2">Police</option>
                  <option value="six2">Professional</option>
                  <option value="seven2">Mafia</option>
                  <option value="eight2">Good Person</option>
                  <option value="nine2">Lover</option>
                  <option value="ten2">Corporate</option>
                  <option value="jack2">Yakuza</option>
                  <option value="queen2">Web</option>
                  <option value="king2">Astral</option>
                  <option value="ace2">Japan</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label for="lifepathThree">Lifepath: Encounter</label>
                <select id="lifepathThree" name="lifepathThree">
                  <option value="joker3">Hatred</option>
                  <option value="two3">Reluctant Aquaintance</option>
                  <option value="three3">Contract</option>
                  <option value="four3">Brethren</option>
                  <option value="five3">Friendship</option>
                  <option value="six3">Trust</option>
                  <option value="seven3">Business</option>
                  <option value="eight3">Family</option>
                  <option value="nine3">Goodwill</option>
                  <option value="ten3">Esteem</option>
                  <option value="jack3">Debt</option>
                  <option value="queen3">Destiny</option>
                  <option value="king3">Enthusiasm</option>
                  <option value="ace3">Awe</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label for="styleOne">First Style</label>
                <select id="styleOne" name="styleOne">
                  <option value="kabuki">0: Kabuki</option>
                  <option value="vasara">1: Vasara</option>
                  <option value="tatara">2: Tatara</option>
                  <option value="mistress">3: Mistress</option>
                  <option value="kabuto">4: Kabuto</option>
                  <option value="charisma">5: Charisma</option>
                  <option value="mannequin">6: Mannequin</option>
                  <option value="kaze">7: Kaze</option>
                  <option value="fate">8: Fate</option>
                  <option value="kuromaku">9: Kuromaku</option>
                  <option value="exec">10: Exec</option>
                  <option value="katana">11: Katana</option>
                  <option value="kugutsu">12: Kugutsu</option>
                  <option value="kage">13: Kage</option>
                  <option value="chakra">14: Chakra</option>
                  <option value="legger">15: Legger</option>
                  <option value="kabutowari">16: Kabutowari</option>
                  <option value="highlander">17: Highlander</option>
                  <option value="mayakashi">18: Mayakashi</option>
                  <option value="talkie">19: Talkie</option>
                  <option value="inu">20: Inu</option>
                  <option value="neuro">21: Neuro</option>
                  <option value="hiruko">-1: Hiruko</option>
                  <option value="kurogane">-2: Kurogane</option>
                  <option value="ibuki">-4: Ibuki</option>
                  <option value="arashi">-7: Arashi</option>
                  <option value="kagemusha">-9: Kagemusha</option>
                  <option value="ayakashi">-18: Ayakashi</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label for="styleTwo">Second Style</label>
                <select id="styleTwo" name="styleTwo">
                  <option value="kabuki">0: Kabuki</option>
                  <option value="vasara">1: Vasara</option>
                  <option value="tatara">2: Tatara</option>
                  <option value="mistress">3: Mistress</option>
                  <option value="kabuto">4: Kabuto</option>
                  <option value="charisma">5: Charisma</option>
                  <option value="mannequin">6: Mannequin</option>
                  <option value="kaze">7: Kaze</option>
                  <option value="fate">8: Fate</option>
                  <option value="kuromaku">9: Kuromaku</option>
                  <option value="exec">10: Exec</option>
                  <option value="katana">11: Katana</option>
                  <option value="kugutsu">12: Kugutsu</option>
                  <option value="kage">13: Kage</option>
                  <option value="chakra">14: Chakra</option>
                  <option value="legger">15: Legger</option>
                  <option value="kabutowari">16: Kabutowari</option>
                  <option value="highlander">17: Highlander</option>
                  <option value="mayakashi">18: Mayakashi</option>
                  <option value="talkie">19: Talkie</option>
                  <option value="inu">20: Inu</option>
                  <option value="neuro">21: Neuro</option>
                  <option value="hiruko">-1: Hiruko</option>
                  <option value="kurogane">-2: Kurogane</option>
                  <option value="ibuki">-4: Ibuki</option>
                  <option value="arashi">-7: Arashi</option>
                  <option value="kagemusha">-9: Kagemusha</option>
                  <option value="ayakashi">-18: Ayakashi</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label for="styleThree">Third Style</label>
                <select id="styleThree" name="styleThree">
                  <option value="kabuki">0: Kabuki</option>
                  <option value="vasara">1: Vasara</option>
                  <option value="tatara">2: Tatara</option>
                  <option value="mistress">3: Mistress</option>
                  <option value="kabuto">4: Kabuto</option>
                  <option value="charisma">5: Charisma</option>
                  <option value="mannequin">6: Mannequin</option>
                  <option value="kaze">7: Kaze</option>
                  <option value="fate">8: Fate</option>
                  <option value="kuromaku">9: Kuromaku</option>
                  <option value="exec">10: Exec</option>
                  <option value="katana">11: Katana</option>
                  <option value="kugutsu">12: Kugutsu</option>
                  <option value="kage">13: Kage</option>
                  <option value="chakra">14: Chakra</option>
                  <option value="legger">15: Legger</option>
                  <option value="kabutowari">16: Kabutowari</option>
                  <option value="highlander">17: Highlander</option>
                  <option value="mayakashi">18: Mayakashi</option>
                  <option value="talkie">19: Talkie</option>
                  <option value="inu">20: Inu</option>
                  <option value="neuro">21: Neuro</option>
                  <option value="hiruko">-1: Hiruko</option>
                  <option value="kurogane">-2: Kurogane</option>
                  <option value="ibuki">-4: Ibuki</option>
                  <option value="arashi">-7: Arashi</option>
                  <option value="kagemusha">-9: Kagemusha</option>
                  <option value="ayakashi">-18: Ayakashi</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label for="miracleOne">First Miracle:</label>
                <input type="text" id="miracleOne" name="miracleOne" />
              </div>
              <div className="form-group col-md-10">
                <label for="miracleTwo">Second Miracle:</label>
                <input type="text" id="miracleTwo" name="miracleTwo" />
              </div>
              <div className="form-group col-md-10">
                <label for="miracleThree">Third Miracle:</label>
                <input type="text" id="miracleThree" name="miracleThree" />
              </div>
              <div className="form-group col-md-10">
                <label for="key">Select Key</label>
                <select id="key" name="key">
                  <option value="kabuki">0: Kabuki</option>
                  <option value="vasara">1: Vasara</option>
                  <option value="tatara">2: Tatara</option>
                  <option value="mistress">3: Mistress</option>
                  <option value="kabuto">4: Kabuto</option>
                  <option value="charisma">5: Charisma</option>
                  <option value="mannequin">6: Mannequin</option>
                  <option value="kaze">7: Kaze</option>
                  <option value="fate">8: Fate</option>
                  <option value="kuromaku">9: Kuromaku</option>
                  <option value="exec">10: Exec</option>
                  <option value="katana">11: Katana</option>
                  <option value="kugutsu">12: Kugutsu</option>
                  <option value="kage">13: Kage</option>
                  <option value="chakra">14: Chakra</option>
                  <option value="legger">15: Legger</option>
                  <option value="kabutowari">16: Kabutowari</option>
                  <option value="highlander">17: Highlander</option>
                  <option value="mayakashi">18: Mayakashi</option>
                  <option value="talkie">19: Talkie</option>
                  <option value="inu">20: Inu</option>
                  <option value="neuro">21: Neuro</option>
                  <option value="hiruko">-1: Hiruko</option>
                  <option value="kurogane">-2: Kurogane</option>
                  <option value="ibuki">-4: Ibuki</option>
                  <option value="arashi">-7: Arashi</option>
                  <option value="kagemusha">-9: Kagemusha</option>
                  <option value="ayakashi">-18: Ayakashi</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label for="persona">Select Persona</label>
                <select id="persona" for="persona">
                  <option value="kabuki">0: Kabuki</option>
                  <option value="vasara">1: Vasara</option>
                  <option value="tatara">2: Tatara</option>
                  <option value="mistress">3: Mistress</option>
                  <option value="kabuto">4: Kabuto</option>
                  <option value="charisma">5: Charisma</option>
                  <option value="mannequin">6: Mannequin</option>
                  <option value="kaze">7: Kaze</option>
                  <option value="fate">8: Fate</option>
                  <option value="kuromaku">9: Kuromaku</option>
                  <option value="exec">10: Exec</option>
                  <option value="katana">11: Katana</option>
                  <option value="kugutsu">12: Kugutsu</option>
                  <option value="kage">13: Kage</option>
                  <option value="chakra">14: Chakra</option>
                  <option value="legger">15: Legger</option>
                  <option value="kabutowari">16: Kabutowari</option>
                  <option value="highlander">17: Highlander</option>
                  <option value="mayakashi">18: Mayakashi</option>
                  <option value="talkie">19: Talkie</option>
                  <option value="inu">20: Inu</option>
                  <option value="neuro">21: Neuro</option>
                  <option value="hiruko">-1: Hiruko</option>
                  <option value="kurogane">-2: Kurogane</option>
                  <option value="ibuki">-4: Ibuki</option>
                  <option value="arashi">-7: Arashi</option>
                  <option value="kagemusha">-9: Kagemusha</option>
                  <option value="ayakashi">-18: Ayakashi</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label for="shadow">Select Shadow</label>
                <select id="shadow" name="shadow">
                  <option value="kabuki">0: Kabuki</option>
                  <option value="vasara">1: Vasara</option>
                  <option value="tatara">2: Tatara</option>
                  <option value="mistress">3: Mistress</option>
                  <option value="kabuto">4: Kabuto</option>
                  <option value="charisma">5: Charisma</option>
                  <option value="mannequin">6: Mannequin</option>
                  <option value="kaze">7: Kaze</option>
                  <option value="fate">8: Fate</option>
                  <option value="kuromaku">9: Kuromaku</option>
                  <option value="exec">10: Exec</option>
                  <option value="katana">11: Katana</option>
                  <option value="kugutsu">12: Kugutsu</option>
                  <option value="kage">13: Kage</option>
                  <option value="chakra">14: Chakra</option>
                  <option value="legger">15: Legger</option>
                  <option value="kabutowari">16: Kabutowari</option>
                  <option value="highlander">17: Highlander</option>
                  <option value="mayakashi">18: Mayakashi</option>
                  <option value="talkie">19: Talkie</option>
                  <option value="inu">20: Inu</option>
                  <option value="neuro">21: Neuro</option>
                  <option value="hiruko">-1: Hiruko</option>
                  <option value="kurogane">-2: Kurogane</option>
                  <option value="ibuki">-4: Ibuki</option>
                  <option value="arashi">-7: Arashi</option>
                  <option value="kagemusha">-9: Kagemusha</option>
                  <option value="ayakashi">-18: Ayakashi</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label for="extraPoint">
                  Assign An Extra Point To Your Character's Attributes
                </label>
                <select id="extraPoint" name="extraPoint">
                  <option value="reasonAttribute">Reason Attribute</option>
                  <option value="reasonControl">Reason Control</option>
                  <option value="passionAttribute">Passion Attribute</option>
                  <option value="passionControl">Passion Control</option>
                  <option value="heartAttribute">Heart Attribute</option>
                  <option value="heartControl">Heart Control</option>
                  <option value="mundaneAttribute">Mundane Attribute</option>
                  <option value="mundaneControl">Mundane Control</option>
                </select>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
      <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
      <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    </div>
  );
}

export default App;
