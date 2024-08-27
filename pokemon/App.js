import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const burtleData = {
    name: "Burtle",
    image: require("./assets/Burtle.png"),
    type: "Water",
    hp: 39,
    moves: ["Tackle", "Growl", "Withdraw", "Razor Leaf"],
    weaknesses: ["Ice-type Moves", "Flying-type Moves"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/Squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const chimcharData = {
    name: "Chimchar",
    image: require("./assets/Chimchar.png"), // Replace with the actual image path
    type: "Fire",
    hp: 44,
    moves: ["Scratch", "Growl", "Ember", "Fury Swipes"],
    weaknesses: ["Electric", "Grass"],
  };


  

  const charmanderData = {
    name: "Charmander",
    image: require("./assets/Charmander.png"), // Replace with the actual image path
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Growl", "Flamethrower", "Flare Blitz"],
    weaknesses: ["Water-type Moves"],
  };

  const eeveeData = {
    name: "Eevee",
    image: require("./assets/eevee.webp"), // Replace with the actual image path
    type: "Normal",
    hp: 39,
    moves: ["Tackle", "Growl", "Quick attack", "Tail whip"],
    weaknesses: ["Fighting-type Moves"],
  };
  
  const grookeyData = {
    name: "Grookey",
    image: require("./assets/Grookey.png"), // Replace with the actual image path
    type: "Grass",
    hp: 39,
    moves: ["Scratch", "Growl", "Branch Poke", "Seed Bomb"],
    weaknesses: ["Fire-type Moves"],
  };
  const meowthData = {
    name: "Meowth",
    image: require("./assets/Meowth.png"), // Replace with the actual image path
    type: "Normal",
    hp: 39,
    moves: ["Scratch", "Growl", "Bite", "Screetch"],
    weaknesses: ["Fighting-type Moves"],
  };
  const oshawottData = {
    name: "Oshawott",
    image: require("./assets/Oshawott.png"), // Replace with the actual image path
    type: "Water",
    hp: 39,
    moves: ["Tackle", "Growl", "Water gun", "Tail whip"],
    weaknesses: ["Fire-type Moves"],
  };
  const teddiursaData = {
    name: "Teddiusra",
    image: require("./assets/Teddiursa.png"), // Replace with the actual image path
    type: "Normal",
    hp: 39,
    moves: ["Leer", "Lick", "Scratch", "Fake Tears"],
    weaknesses: ["Fighting-type Moves"],
  };
  const tepigData = {
    name: "Tepig",
    image: require("./assets/Tepig.png"), // Replace with the actual image path
    type: "Normal",
    hp: 39,
    moves: ["Tackle", "Tail Whip", "Flame Wheel", "Take Down"],
    weaknesses: ["Ground-type Moves"],
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...burtleData} />
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...chimcharData} />
        <PokemonCard {...eeveeData} />
        <PokemonCard {...grookeyData} />
        <PokemonCard {...meowthData} />
        <PokemonCard {...oshawottData} />
        <PokemonCard {...teddiursaData} />
        <PokemonCard {...tepigData} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});