import React from 'react';
import styled from "styled-components";
//import { connect } from "react-redux";
//import { fetchPokemon } from "../../actions";

//this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1).toLowerCase() -- name
//this.props.pokemon.sprites.other.dream_world.front_default -- image
//this.props.pokemon.stats[0].base_stat --HP
//this.props.pokemon.stats[1].base_stat --attack
//this.props.pokemon.stats[2].base_stat --defence
//this.props.pokemon.stats[5].base_stat --speed


class PokemonCard extends React.Component {

    /*componentDidMount() {
        this.props.fetchPokemon(this.props.pokemonID); 
    }*/

    render () {
        //console.log(this.props.pokemon.name);
        
        /*if(!this.props.pokemon.name){
            return null;
        }*/

        return (
            <PokemonCardComponent>
                <div className='pokemon'>
                    <div>HEALTH</div>
                    <div>HEALTH BAR</div>
                    <h1>{this.props.name}</h1>
                    <img src={this.props.image} alt=''/>
                </div>
                <h3>Stats</h3>
                <div className='stats'>
                    <h4 className='stat'>HP: {this.props.hp}</h4>
                    <h4 className='stat'>Attack: {this.props.attack}</h4>
                    <h4 className='stat'>Defense: {this.props.defence}</h4>
                    <h4 className='stat_2'>Speed: {this.props.speed}</h4>
                </div>
             </PokemonCardComponent>
  )}
}

/*const mapStateToProps = (state) => {
    return {pokemon: state.pokemon}
}*/

export default PokemonCard/*connect(
    mapStateToProps, 
    {fetchPokemon}
    )*/

const PokemonCardComponent = styled.div `
    background-color: blue;
    width: 250px;
    height: 405px;
    font-family: Bellota;
    
    h1 {
        font-size: 17px;
        text-align: center;
        margin-top:5px;
    }

    h3 {
        font-size: 17px;
        margin-bottom: 5px;
        padding-left: 10px;
    }

    img {
        height: 150px;
        width: 140px;
        text-align: center;
        margin-top: 5px;
    }

    .pokemon {
        text-align:center;
    }

    .stat {
        margin-top: 2px;
        margin-bottom:1px;
        padding-left: 10px;
    }

    .stat_2 {
        margin-top: 2px;
        margin-bottom:25px;
        padding-left: 10px;
    }

    .stats {
        font-size: 14px;
        border: 4px solid #FFCC00;
        border-radius: 18px;
        background-color: #FFF7D6;
        padding-top: 5px;
    }
`