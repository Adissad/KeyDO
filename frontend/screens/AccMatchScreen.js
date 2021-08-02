import React, { useState } from 'react';
import { connect } from 'react-redux';


const [matchResult, setMatchResult] = useState(false);




function AccMathcScreen(props) {

    var Music = [DanceScreen, RnBScreen, AfroScreen, RockScreen, BluesScreen, HipHopScreen, LatinoScreen, JazzScreen, SoulScreen, ClassiqueScreen, ReaggaeScreen, PopScreen, FrenchScreen, KpopScreenScreen, MétalScreen, FunkScreen, FolkScreen, CountryScreen, DécenniesScreen, GospelScreen];

    var GenreMusic = () => {

        if (music.token == RnBScreen) {
            setMatchResult(true);
        } else {
            setMatchResult(false);
        }
    }

    return (

        
        
    )


}

function mapDispatch(dispatch) {
    return {
        onSnap: function (match) {
            dispatch({ type: 'matchResult', match })
        }
    }
}

export default connect(null, mapDispatch)(AccMathcScreen);