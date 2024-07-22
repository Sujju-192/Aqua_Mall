import React, { useState } from "react";
import "../App.css";
import "./Panel.css";

export default function Panel() {
  return (
    <>
      <div className="panel">
        <select name="Fishes" id="fish-category">
          <option className="panel-select" value="all" selected>
            Freshwater Fishes
          </option>
          <option className="panel-select" value="tetra">
            Tetras
          </option>
          <option className="panel-select" value="goldfish">
            Goldfish
          </option>
          <option className="panel-select" value="angelfish">
            Angelfish
          </option>
          <option className="panel-select" value="barbs">
            Barbs
          </option>
          <option className="panel-select" value="betta">
            Betta
          </option>
          <option className="panel-select" value="gourami">
            Gourami
          </option>
          <option className="panel-select" value="discus">
            Discus
          </option>
          <option className="panel-select" value="indian-species">
            Indian Species
          </option>
        </select>

        <select name="Fishes" id="fish-category">
          <option className="panel-select" value="all" selected>
            Marine Fishes
          </option>
          <option className="panel-select" value="clownfish">
            ClownFish
          </option>
          <option className="panel-select" value="marineangels">
            Marine Angels
          </option>
          <option className="panel-select" value="invertibrates">
            Invertibrates
          </option>
          <option className="panel-select" value="brackishfish">
            Brackish-water Fishes
          </option>
        </select>

        <select name="Fishes" id="plant-category">
          <option className="panel-select" value="all" selected>
            Aquatic Plants
          </option>
          <option className="panel-select" value="tetra">
            Anubias
          </option>
          <option className="panel-select" value="goldfish">
            Ferns
          </option>
          <option className="panel-select" value="angelfish">
            Buce
          </option>
          <option className="panel-select" value="barbs">
            Moss
          </option>
          <option className="panel-select" value="betta">
            Floating Plants
          </option>
          <option className="panel-select" value="gourami">
            Stem Plants
          </option>
          <option className="panel-select" value="discus">
            Rhizome Plants
          </option>
          <option className="panel-select" value="indian-species">
            Submerged Plants
          </option>
        </select>

        <select name="Accesories" id="accesories">
            <option value="accesories" selected>
                Accesories
            </option> 
            <option value="pumps" >Pumps</option>
            <option value="powerheads">Powerheads</option>
            <option value="spongue">Spongue Filter</option>
            <option value="hob">Hang-On Back</option>
            <option value="canister">Canister Filter</option>
            <option value="sand">Sand</option>
            <option value="gravel">Gravel</option>
            <option value="aqua-soil">Aqua-Soil</option>
            <option value="tools">Maintainance-Tools</option>
        </select>
      </div>
    </>
  );
}
