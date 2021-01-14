// Import Entities
import ActorMnM3e from "./module/actor/entity.js";
import ActorSheetMnM3eCharacter from "./module/actor/sheets/character.js";

Hooks.once("init", function() {
  console.log(`MnM3e | Initializing the MnM3e Game System\n`);
 
  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("mnm3e", ActorSheetMnM3eCharacter, {
    types: ["character"],
    makeDefault: true,
    label: "MNM3E.SheetClassCharacter"
  });
  Items.unregisterSheet("core", ItemSheet);

  
 });