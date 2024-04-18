// Each value is related to the Pokemon type:
// Fire: Extraversion (liveliness, boldness)
// Water: Emotionality
// Grass: Agreeableness
// Electric: Extraversion 
// Psychic: Openness to Experience (inquisitiveness, creativity)
// Rock: Conscientiousness (organization, diligence)
// Ground: Honesty-Humility (sincerity, fairness)
// Poison: Agreeableness (reverse scored - skepticism, cautiousness)
// Flying: Extraversion (adventurous, outgoing)
// Bug: Conscientiousness (hardworking, meticulous)
// Normal: Flexibility, adaptability (across several traits)
// Ghost: Openness to Experience (curiosity about the unknown)
// Fighting: Extraversion (assertiveness, competitiveness)
// Ice: Emotionality (calmness under pressure, sensitivity)
// Dragon: Openness to Experience (wisdom, mythical curiosity)
// Steel: Conscientiousness (structured, reliable)
// Fairy: Agreeableness (kindness, warmth)

const pokemon = [
    {
        id: 1,
        num: "001",
        name: "Bulbasaur",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/bulbasaur.png",
        type: ["Grass", "Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.5,
                positive: false,
            },
            {
                name: "Openness to Experience",
                weight: 0.5,
                positive: true,
            }
        ]
    },
    {
        id: 2,
        num: "002",
        name: "Ivysaur",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/ivysaur.png",
        type: ["Grass", "Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: false,
            },
            {
                name: "Openness to Experience",
                weight: 0.6,
                positive: true,
            }
        ]
    },
    {
        id: 3,
        num: "003",
        name: "Venusaur",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/venusaur.png",
        type: ["Grass", "Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: false,
            },
            {
                name: "Openness to Experience",
                weight: 0.7,
                positive: true,
            }
        ]
    },
    {
        id: 4,
        num: "004",
        name: "Charmander",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/charmander.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.3,
                positive: true,
            }
        ]
    },
    {
        id: 5,
        num: "005",
        name: "Charmeleon",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/charmeleon.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: true,
            }
        ]
    },
    {
        id: 6,
        num: "006",
        name: "Charizard",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/charizard.png",
        type: ["Fire", "Flying"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 1.0,
                positive: true,
            }
        ]
    },
    {
        id: 7,
        num: "007",
        name: "Squirtle",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/squirtle.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.3,
                positive: true,
            }
        ]
    },
    {
        id: 8,
        num: "008",
        name: "Wartortle",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/wartortle.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: true,
            }
        ]
    },
    {
        id: 9,
        num: "009",
        name: "Blastoise",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/blastoise.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.9,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.1,
                positive: true,
            }
        ]
    },
    {
        id: 10,
        num: "010",
        name: "Caterpie",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/caterpie.png",
        type: ["Bug"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.3,
                positive: false,
            }
        ]
    },
    {
        id: 11,
        num: "011",
        name: "Metapod",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/metapod.png",
        type: ["Bug"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 12,
        num: "012",
        name: "Butterfree",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/butterfree.png",
        type: ["Bug", "Flying"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.5,
                positive: true,
            }
        ]
    },
    {
        id: 13,
        num: "013",
        name: "Weedle",
        img: "http://www.serebii.net/pokemongo/pokemon/013.png",
        type: ["Bug", "Poison"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.4,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: false,
            }
        ]
    },
    {
        id: 14,
        num: "014",
        name: "Kakuna",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/kakuna.png",
        type: ["Bug", "Poison"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.3,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.7,
                positive: false,
            }
        ]
    },
    {
        id: 15,
        num: "015",
        name: "Beedrill",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/beedrill.png",
        type: ["Bug", "Poison"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 16,
        num: "016",
        name: "Pidgey",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/pidgey.png",
        type: ["Normal", "Flying"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.7,
                positive: true,
            }
        ]
    },
    {
        id: 17,
        num: "017",
        name: "Pidgeotto",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/pidgeotto.png",
        type: ["Normal", "Flying"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 18,
        num: "018",
        name: "Pidgeot",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/pidgeot.png",
        type: ["Normal", "Flying"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.4,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.6,
                positive: true,
            }
        ]
    },
    {
        id: 19,
        num: "019",
        name: "Rattata",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/rattata.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.7,
                positive: true,
            }
        ]
    },
    {
        id: 20,
        num: "020",
        name: "Raticate",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/raticate.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.1,
                positive: false,
            },
            {
                name: "Openness to Experience",
                weight: 0.9,
                positive: true,
            }
        ]
    },
    {
        id: 21,
        num: "021",
        name: "Spearow",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/spearow.png",
        type: ["Normal", "Flying"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.8,
                positive: true,
            }
        ]
    },
    {
        id: 22,
        num: "022",
        name: "Fearow",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/fearow.png",
        type: ["Normal", "Flying"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.3,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.7,
                positive: true,
            }
        ]
    },
    {
        id: 23,
        num: "023",
        name: "Ekans",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/ekans.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.9,
                positive: false,
            }
        ]
    },
    {
        id: 24,
        num: "024",
        name: "Arbok",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/arbok.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 1.0,
                positive: false,
            }
        ]
    },
    {
        id: 25,
        num: "025",
        name: "Pikachu",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/pikachu.png",
        type: ["Electric"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.5,
                positive: true,
            }
        ]
    },
    {
        id: 26,
        num: "026",
        name: "Raichu",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/raichu.png",
        type: ["Electric"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 27,
        num: "027",
        name: "Sandshrew",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/sandshrew.png",
        type: ["Ground"],
        description: "",
        traits: [
            {
                name: "Honesty-Humility",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: true,
            }
        ]
    },
    {
        id: 28,
        num: "028",
        name: "Sandslash",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/sandslash.png",
        type: ["Ground"],
        description: "",
        traits: [
            {
                name: "Honesty-Humility",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: false,
            }
        ]
    },
    {
        id: 29,
        num: "029",
        name: "Nidoran ♀",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/nidoran-f.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.7,
                positive: false,
            }
        ]
    },
    {
        id: 30,
        num: "030",
        name: "Nidorina",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/nidorina.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: false,
            }
        ]
    },
    {
        id: 31,
        num: "031",
        name: "Nidoqueen",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/nidoqueen.png",
        type: ["Poison", "Ground"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: false,
            },
            {
                name: "Honesty-Humility",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 32,
        num: "032",
        name: "Nidoran ♂",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/nidoran-m.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.8,
                positive: false,
            }
        ]
    },
    {
        id: 33,
        num: "033",
        name: "Nidorino",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/nidorino.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.5,
                positive: false,
            }
        ]
    },
    {
        id: 34,
        num: "034",
        name: "Nidoking",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/nidoking.png",
        type: ["Poison", "Ground"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: false,
            },
            {
                name: "Honesty-Humility",
                weight: 0.6,
                positive: true,
            }
        ]
    },
    {
        id: 35,
        num: "035",
        name: "Clefairy",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/clefairy.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.9,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.1,
                positive: true,
            }
        ]
    },
    {
        id: 36,
        num: "036",
        name: "Clefable",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/clefable.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.9,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.1,
                positive: true,
            }
        ]
    },
    {
        id: 37,
        num: "037",
        name: "Vulpix",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/vulpix.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Emotionality",
                weight: 0.2,
                positive: true,
            }
        ]
    },
    {
        id: 38,
        num: "038",
        name: "Ninetales",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/ninetales.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.3,
                positive: true,
            }
        ]
    },
    {
        id: 39,
        num: "039",
        name: "Jigglypuff",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/jigglypuff.png",
        type: ["Normal"],
        traits: [
            {
                name: "Agreeableness",
                weight: 1.0,
                positive: true,
            }
        ]
    },
    {
        id: 40,
        num: "040",
        name: "Wigglytuff",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/wigglytuff.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: true,
            }
        ]
    },
    {
        id: 41,
        num: "041",
        name: "Zubat",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/zubat.png",
        type: ["Poison", "Flying"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: false,
            },
            {
                name: "Extraversion",
                weight: 0.4,
                positive: false,
            }
        ]
    },
    {
        id: 42,
        num: "042",
        name: "Golbat",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/golbat.png",
        type: ["Poison", "Flying"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.7,
                positive: false,
            },
            {
                name: "Extraversion",
                weight: 0.3,
                positive: false,
            }
        ]
    },
    {
        id: 43,
        num: "043",
        name: "Oddish",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/oddish.png",
        type: ["Grass", "Poison"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.4,
                positive: false,
            },
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: true,
            }
        ]
    },
    {
        id: 44,
        num: "044",
        name: "Gloom",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/gloom.png",
        type: ["Grass", "Poison"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.4,
                positive: false,
            },
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: false,
            }
        ]
    },
    {
        id: 45,
        num: "045",
        name: "Vileplume",
        img: "http://www.serebii.net/pokemongo/pokemon/045.png",
        type: ["Grass", "Poison"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 46,
        num: "046",
        name: "Paras",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/paras.png",
        type: ["Bug", "Grass"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 47,
        num: "047",
        name: "Parasect",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/parasect.png",
        type: ["Bug", "Grass"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: true,
            }
        ]
    },
    {
        id: 48,
        num: "048",
        name: "Venonat",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/venonat.png",
        type: ["Bug", "Poison"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.9,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.1,
                positive: false,
            }
        ]
    },
    {
        id: 49,
        num: "049",
        name: "Venomoth",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/venomoth.png",
        type: ["Bug", "Poison"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.9,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.1,
                positive: true,
            }
        ]
    },
    {
        id: 50,
        num: "050",
        name: "Diglett",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/diglett.png",
        type: ["Ground"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.3,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.7,
                positive: false,
            }
        ]
    },
    {
        id: 51,
        num: "051",
        name: "Dugtrio",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/dugtrio.png",
        type: ["Ground"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.4,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.6,
                positive: false,
            }
        ]
    },
    {
        id: 52,
        num: "052",
        name: "Meowth",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/meowth.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 53,
        num: "053",
        name: "Persian",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/persian.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: true,
            }
        ]
    },
    {
        id: 54,
        num: "054",
        name: "Psyduck",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/psyduck.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 1.0,
                positive: false,
            }
        ]
    },
    {
        id: 55,
        num: "055",
        name: "Golduck",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/golduck.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Emotionality",
                weight: 0.5,
                positive: false,
            }
        ]
    },
    {
        id: 56,
        num: "056",
        name: "Mankey",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/mankey.png",
        type: ["Fighting"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.5,
                positive: false,
            }
        ]
    },
    {
        id: 57,
        num: "057",
        name: "Primeape",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/primeape.png",
        type: ["Fighting"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.4,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: false,
            }
        ]
    },
    {
        id: 58,
        num: "058",
        name: "Growlithe",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/growlithe.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.9,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.1,
                positive: true,
            }
        ]
    },
    {
        id: 59,
        num: "059",
        name: "Arcanine",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/arcanine.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 1.0,
                positive: true,
            },
        ]
    },
    {
        id: 60,
        num: "060",
        name: "Poliwag",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/poliwag.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 61,
        num: "061",
        name: "Poliwhirl",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/poliwhirl.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.3,
                positive: true,
            }
        ]
    },
    {
        id: 62,
        num: "062",
        name: "Poliwrath",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/poliwrath.png",
        type: ["Water", "Fighting"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 63,
        num: "063",
        name: "Abra",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/abra.png",
        type: ["Psychic"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Emotionality",
                weight: 0.2,
                positive: true,
            }
        ]
    },
    {
        id: 64,
        num: "064",
        name: "Kadabra",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/kadabra.png",
        type: ["Psychic"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Emotionality",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 65,
        num: "065",
        name: "Alakazam",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/alakazam.png",
        type: ["Psychic"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Emotionality",
                weight: 0.5,
                positive: true,
            }
        ]
    },
    {
        id: 66,
        num: "066",
        name: "Machop",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/machop.png",
        type: ["Fighting"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: false,
            }
        ]
    },
    {
        id: 67,
        num: "067",
        name: "Machoke",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/machoke.png",
        type: ["Fighting"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: false,
            }
        ]
    },
    {
        id: 68,
        num: "068",
        name: "Machamp",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/machamp.png",
        type: ["Fighting"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 69,
        num: "069",
        name: "Bellsprout",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/bellsprout.png",
        type: ["Grass", "Poison"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: false,
            }
        ]
    },
    {
        id: 70,
        num: "070",
        name: "Weepinbell",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/weepinbell.png",
        type: ["Grass", "Poison"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: false,
            }
        ]
    },
    {
        id: 71,
        num: "071",
        name: "Victreebel",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/victreebel.png",
        type: ["Grass", "Poison"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.5,
                positive: false,
            }
        ]
    },
    {
        id: 72,
        num: "072",
        name: "Tentacool",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/tentacool.png",
        type: ["Water", "Poison"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.6,
                positive: false,
            },
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: false,
            }
        ]
    },
    {
        id: 73,
        num: "073",
        name: "Tentacruel",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/tentacruel.png",
        type: ["Water", "Poison"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.2,
                positive: false,
            },
            {
                name: "Agreeableness",
                weight: 0.8,
                positive: false,
            }
        ]
    },
    {
        id: 74,
        num: "074",
        name: "Geodude",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/geodude.png",
        type: ["Rock", "Ground"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.3,
                positive: true,
            }
        ]
    },
    {
        id: 75,
        num: "075",
        name: "Graveler",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/graveler.png",
        type: ["Rock", "Ground"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 76,
        num: "076",
        name: "Golem",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/golem.png",
        type: ["Rock", "Ground"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.2,
                positive: true,
            }
        ]
    },
    {
        id: 77,
        num: "077",
        name: "Ponyta",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/ponyta.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 78,
        num: "078",
        name: "Rapidash",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/rapidash.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.9,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.1,
                positive: false,
            }
        ]
    },
    {
        id: 79,
        num: "079",
        name: "Slowpoke",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/slowpoke.png",
        type: ["Water", "Psychic"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.9,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.1,
                positive: false,
            }
        ]
    },
    {
        id: 80,
        num: "080",
        name: "Slowbro",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/slowbro.png",
        type: ["Water", "Psychic"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 81,
        num: "081",
        name: "Magnemite",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/magnemite.png",
        type: ["Electric"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: false,
            }
        ]
    },
    {
        id: 82,
        num: "082",
        name: "Magneton",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/magneton.png",
        type: ["Electric"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.5,
                positive: false,
            }
        ]
    },
    {
        id: 83,
        num: "083",
        name: "Farfetch'd",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/farfetchd.png",
        type: ["Normal", "Flying"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.2,
                positive: false,
            },
            {
                name: "Extraversion",
                weight: 0.8,
                positive: true,
            }
        ]
    },
    {
        id: 84,
        num: "084",
        name: "Doduo",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/doduo.png",
        type: ["Normal", "Flying"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.1,
                positive: false,
            },
            {
                name: "Extraversion",
                weight: 0.9,
                positive: true,
            }
        ]
    },
    {
        id: 85,
        num: "085",
        name: "Dodrio",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/dodrio.png",
        type: ["Normal", "Flying"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: false,
            },
            {
                name: "Extraversion",
                weight: 0.7,
                positive: true,
            }
        ]
    },
    {
        id: 86,
        num: "086",
        name: "Seel",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/seel.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.4,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.6,
                positive: true,
            }
        ]
    },
    {
        id: 87,
        num: "087",
        name: "Dewgong",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/dewgong.png",
        type: ["Water", "Ice"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.45,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.55,
                positive: true,
            }
        ]
    },
    {
        id: 88,
        num: "088",
        name: "Grimer",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/grimer.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.9,
                positive: false,
            },
            {
                name: "Openness to Experience",
                weight: 0.1,
                positive: true,
            }
        ]
    },
    {
        id: 89,
        num: "089",
        name: "Muk",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/muk.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.8,
                positive: false,
            },
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: true,
            }
        ]
    },
    {
        id: 90,
        num: "090",
        name: "Shellder",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/shellder.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.75,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.25,
                positive: false,
            }
        ]
    },
    {
        id: 91,
        num: "091",
        name: "Cloyster",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/cloyster.png",
        type: ["Water", "Ice"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.65,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.35,
                positive: false,
            }
        ]
    },
    {
        id: 92,
        num: "092",
        name: "Gastly",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/gastly.png",
        type: ["Ghost", "Poison"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.4,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: false,
            }
        ]
    },
    {
        id: 93,
        num: "093",
        name: "Haunter",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/haunter.png",
        type: ["Ghost", "Poison"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.5,
                positive: false,
            }
        ]
    },
    {
        id: 94,
        num: "094",
        name: "Gengar",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/gengar.png",
        type: ["Ghost", "Poison"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: false,
            }
        ]
    },
    {
        id: 95,
        num: "095",
        name: "Onix",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/onix.png",
        type: ["Rock", "Ground"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.85,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.15,
                positive: false,
            }
        ]
    },
    {
        id: 96,
        num: "096",
        name: "Drowzee",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/drowzee.png",
        type: ["Psychic"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.55,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.45,
                positive: true,
            }
        ]
    },
    {
        id: 97,
        num: "097",
        name: "Hypno",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/hypno.png",
        type: ["Psychic"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.65,
                positive: true,
            },
            {
                name: "Emotionality",
                weight: 0.35,
                positive: true,
            }
        ]
    },
    {
        id: 98,
        num: "098",
        name: "Krabby",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/krabby.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.25,
                positive: false,
            },
            {
                name: "Agreeableness",
                weight: 0.75,
                positive: false,
            }
        ]
    },
    {
        id: 99,
        num: "099",
        name: "Kingler",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/kingler.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.35,
                positive: false,
            },
            {
                name: "Agreeableness",
                weight: 0.65,
                positive: false,
            }
        ]
    },
    {
        id: 100,
        num: "100",
        name: "Voltorb",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/voltorb.png",
        type: ["Electric"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.3,
                positive: false,
            }
        ]
    },
    {
        id: 101,
        num: "101",
        name: "Electrode",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/electrode.png",
        type: ["Electric"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 102,
        num: "102",
        name: "Exeggcute",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/exeggcute.png",
        type: ["Grass", "Psychic"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.25,
                positive: false,
            },
            {
                name: "Openness to Experience",
                weight: 0.75,
                positive: false,
            }
        ]
    },
    {
        id: 103,
        num: "103",
        name: "Exeggutor",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/exeggutor.png",
        type: ["Grass", "Psychic"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.2,
                positive: false,
            },
            {
                name: "Openness to Experience",
                weight: 0.8,
                positive: false,
            }
        ]
    },
    {
        id: 104,
        num: "104",
        name: "Cubone",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/cubone.png",
        type: ["Ground"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.25,
                positive: false,
            },
            {
                name: "Honesty-Humility",
                weight: 0.75,
                positive: true,
            }
        ]
    },
    {
        id: 105,
        num: "105",
        name: "Marowak",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/marowak.png",
        type: ["Ground"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.2,
                positive: false,
            },
            {
                name: "Honesty-Humility",
                weight: 0.8,
                positive: true,
            }
        ]
    },
    {
        id: 106,
        num: "106",
        name: "Hitmonlee",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/hitmonlee.png",
        type: ["Fighting"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.65,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.35,
                positive: false,
            }
        ]
    },
    {
        id: 107,
        num: "107",
        name: "Hitmonchan",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/hitmonchan.png",
        type: ["Fighting"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 108,
        num: "108",
        name: "Lickitung",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/lickitung.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.2,
                positive: false,
            }
        ]
    },
    {
        id: 109,
        num: "109",
        name: "Koffing",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/koffing.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.5,
                positive: false,
            }
        ]
    },
    {
        id: 110,
        num: "110",
        name: "Weezing",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/weezing.png",
        type: ["Poison"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: false,
            }
        ]
    },
    {
        id: 111,
        num: "111",
        name: "Rhyhorn",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/rhyhorn.png",
        type: ["Ground", "Rock"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.65,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.35,
                positive: true,
            }
        ]
    },
    {
        id: 112,
        num: "112",
        name: "Rhydon",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/rhydon.png",
        type: ["Ground", "Rock"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.75,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.25,
                positive: true,
            }
        ]
    },
    {
        id: 113,
        num: "113",
        name: "Chansey",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/chansey.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Emotionality",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 114,
        num: "114",
        name: "Tangela",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/tangela.png",
        type: ["Grass"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.2,
                positive: true,
            },
            {
                name: "Conscientiousness",
                weight: 0.8,
                positive: false,
            }
        ]
    },
    {
        id: 115,
        num: "115",
        name: "Kangaskhan",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/kangaskhan.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.4,
                positive: false,
            },
            {
                name: "Openness to Experience",
                weight: 0.6,
                positive: true,
            }
        ]
    },
    {
        id: 116,
        num: "116",
        name: "Horsea",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/horsea.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.35,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.65,
                positive: true,
            }
        ]
    },
    {
        id: 117,
        num: "117",
        name: "Seadra",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/seadra.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.35,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.65,
                positive: false,
            }
        ]
    },
    {
        id: 118,
        num: "118",
        name: "Goldeen",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/goldeen.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 119,
        num: "119",
        name: "Seaking",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/seaking.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.6,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.4,
                positive: false,
            }
        ]
    },
    {
        id: 120,
        num: "120",
        name: "Staryu",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/staryu.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.85,
                positive: true,
            },
            {
                name: "Openness to experience",
                weight: 0.15,
                positive: false,
            }
        ]
    },
    {
        id: 121,
        num: "121",
        name: "Starmie",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/starmie.png",
        type: ["Water", "Psychic"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.95,
                positive: true,
            },
            {
                name: "Openness to experience",
                weight: 0.05,
                positive: false,
            }
        ]
    },
    {
        id: 122,
        num: "122",
        name: "Mr. Mime",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/mr-mime.png",
        type: ["Psychic"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.6,
                positive: false,
            },
            {
                name: "Opennes to Experience",
                weight: 0.4,
                positive: true,
            }
        ]
    },
    {
        id: 123,
        num: "123",
        name: "Scyther",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/scyther.png",
        type: ["Bug", "Flying"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.05,
                positive: true,
            },
            {
                name: "Conscientiousness",
                weight: 0.95,
                positive: true,
            }
        ]
    },
    {
        id: 124,
        num: "124",
        name: "Jynx",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/jynx.png",
        type: ["Ice", "Psychic"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Emotionality",
                weight: 0.3,
                positive: true,
            }
        ]
    },
    {
        id: 125,
        num: "125",
        name: "Electabuzz",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/electabuzz.png",
        type: ["Electric"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.9,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.1,
                positive: false,
            }
        ]
    },
    {
        id: 126,
        num: "126",
        name: "Magmar",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/magmar.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.85,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.15,
                positive: false,
            }
        ]
    },
    {
        id: 127,
        num: "127",
        name: "Pinsir",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/pinsir.png",
        type: ["Bug"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.65,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.35,
                positive: false,
            }
        ]
    },
    {
        id: 128,
        num: "128",
        name: "Tauros",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/tauros.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.6,
                positive: false,
            },
            {
                name: "Extraversion",
                weight: 0.4,
                positive: false,
            }
        ]
    },
    {
        id: 129,
        num: "129",
        name: "Magikarp",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/magikarp.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.3,
                positive: false,
            },
            {
                name: "Conscientiousness",
                weight: 0.7,
                positive: false,
            }
        ]
    },
    {
        id: 130,
        num: "130",
        name: "Gyarados",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/gyarados.png",
        type: ["Water", "Flying"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.2
            },
            {
                name: "Extraversion",
                weight: 0.8
            }
        ]
    },
    {
        id: 131,
        num: "131",
        name: "Lapras",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/lapras.png",
        type: ["Water", "Ice"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.75,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.25,
                positive: true,
            }
        ]
    },
    {
        id: 132,
        num: "132",
        name: "Ditto",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/ditto.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.2,
                positive: false,
            },
            {
                name: "Extraversion",
                weight: 0.8,
                positive: false,
            }
        ]
    },
    {
        id: 133,
        num: "133",
        name: "Eevee",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/eevee.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.5,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.5,
                positive: true,
            }
        ]
    },
    {
        id: 134,
        num: "134",
        name: "Vaporeon",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/vaporeon.png",
        type: ["Water"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.7,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.3,
                positive: true,
            }
        ]
    },
    {
        id: 135,
        num: "135",
        name: "Jolteon",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/jolteon.png",
        type: ["Electric"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.3,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.7,
                positive: true,
            }
        ]
    },
    {
        id: 136,
        num: "136",
        name: "Flareon",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/flareon.png",
        type: ["Fire"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.8,
                positive: true,
            },
            {
                name: "Honesty-Humility",
                weight: 0.2,
                positive: true,
            }
        ]
    },
    {
        id: 137,
        num: "137",
        name: "Porygon",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/porygon.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Agreeableness",
                weight: 0.2,
                positive: true,
            },
            {
                name: "Openness to Experience",
                weight: 0.8,
                positive: false,
            }
        ]
    },
    {
        id: 138,
        num: "138",
        name: "Omanyte",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/omanyte.png",
        type: ["Rock", "Water"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.2
            },
            {
                name: "Emotionality",
                weight: 0.8
            }
        ]
    },
    {
        id: 139,
        num: "139",
        name: "Omastar",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/omastar.png",
        type: ["Rock", "Water"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.2
            },
            {
                name: "Emotionality",
                weight: 0.8
            }
        ]
    },
    {
        id: 140,
        num: "140",
        name: "Kabuto",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/kabuto.png",
        type: ["Rock", "Water"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.2
            },
            {
                name: "Emotionality",
                weight: 0.8
            }
        ]
    },
    {
        id: 141,
        num: "141",
        name: "Kabutops",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/kabutops.png",
        type: ["Rock", "Water"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.2
            },
            {
                name: "Emotionality",
                weight: 0.8
            }
        ]
    },
    {
        id: 142,
        num: "142",
        name: "Aerodactyl",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/aerodactyl.png",
        type: ["Rock", "Flying"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.2
            },
            {
                name: "Extraversion",
                weight: 0.8
            }
        ]
    },
    {
        id: 143,
        num: "143",
        name: "Snorlax",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/snorlax.png",
        type: ["Normal"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.9,
                positive: false,
            },
            {
                name: "Extraversion",
                weight: 0.1,
                positive: false,
            }
        ]
    },
    {
        id: 144,
        num: "144",
        name: "Articuno",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/articuno.png",
        type: ["Ice", "Flying"],
        description: "",
        traits: [
            {
                name: "Emotionality",
                weight: 0.55,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.45,
                positive: true,
            }
        ]
    },
    {
        id: 145,
        num: "145",
        name: "Zapdos",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/zapdos.png",
        type: ["Electric", "Flying"],
        description: "",
        traits: [
            {
                name: "Conscientiousness",
                weight: 0.2,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.8,
                positive: true,
            }
        ]
    },
    {
        id: 146,
        num: "146",
        name: "Moltres",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/moltres.png",
        type: ["Fire", "Flying"],
        description: "",
        traits: [
            {
                name: "Extraversion",
                weight: 0.95,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.05,
                positive: false,
            }
        ]
    },
    {
        id: 147,
        num: "147",
        name: "Dratini",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/dratini.png",
        type: ["Dragon"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.65,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.35,
                positive: true,
            }
        ]
    },
    {
        id: 148,
        num: "148",
        name: "Dragonair",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/dragonair.png",
        type: ["Dragon"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.75,
                positive: true,
            },
            {
                name: "Extraversion",
                weight: 0.25,
                positive: true,
            }
        ]
    },
    {
        id: 149,
        num: "149",
        name: "Dragonite",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/dragonite.png",
        type: ["Dragon", "Flying"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.2
            },
            {
                name: "Extraversion",
                weight: 0.8
            }
        ]
    },
    {
        id: 150,
        num: "150",
        name: "Mewtwo",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/mewtwo.png",
        type: ["Psychic"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.55,
                positive: true,
            },
            {
                name: "Agreeableness",
                weight: 0.25,
                positive: true,

            }
        ]
    },
    {
        id: 151,
        num: "151",
        name: "Mew",
        img: "https://img.pokemondb.net/sprites/red-blue/normal/mew.png",
        type: ["Psychic"],
        description: "",
        traits: [
            {
                name: "Openness to Experience",
                weight: 0.95,
                positive: true,
            },
            {
                name: "Emotionality",
                weight: 0.05,
                positive: true,

            }
        ]
    }
];

export default pokemon;