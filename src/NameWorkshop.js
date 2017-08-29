import React, { Component } from 'react';
import './NameWorkshop.css';
import { Grid, Row, Col } from 'react-bootstrap';

class NameWorkshop extends Component {
    constructor() {
        super();
        this.nameLength = 6;
    }

    render() {
        var choiceColumns = [];
        // divide the letters in the name into columns
        var colsPerLetter = 2; // TODO for general name lengths: Math.max(Math.ceil(12.0/this.nameLength), 12);
        for (var i=0; i < this.nameLength; i++) {
            choiceColumns.push(<ChoiceColumn key={i} colKey={i} colsPerLetter={colsPerLetter}/>);
        }
        return (
            <div className="name_workshop">
                <Grid>
                    <Row>
                    {choiceColumns}
                    </Row>
                </Grid>
            </div>
        );
    }
}

class ChoiceColumn extends Component {
    constructor() {
        super();
        this.consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
        this.vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    }

    render() {
        var upperLetters = [];
        var lowerLetters = [];
        // TODO: replace this loop with a map
        var i, key;
        for (i=0; i < this.consonants.length; i++) {
            key = `${ this.consonants[i] }${ this.props.colKey }`;
            upperLetters.push(
                <ClickableLetter letter={this.consonants[i]} key={key} />
            );
        }
        var upperColKey = `u${this.props.colKey}`;
        var upperColumn =
            <LetterColumn
                clickableLetters={upperLetters}
                key={upperColKey}
                colsPerLetter={this.props.colsPerLetter}
            />;

        var blankColKey = `b${this.props.colKey}`;
        var blankLetters = [<LetterBlank />];
        var blankColumn =
            <LetterColumn
                clickableLetters={blankLetters}
                key={blankColKey}
                colsPerLetter={this.props.colsPerLetter}
            />;

        for (i=0; i < this.vowels.length; i++) {
            key = `${ this.vowels[i] }${ this.props.colKey }`;
            lowerLetters.push(
                <ClickableLetter letter={this.vowels[i]} key={key} />
            );
        }
        var lowerColKey = `l${this.props.colKey}`;
        var lowerColumn = 
            <LetterColumn
                className="lower_column"
                clickableLetters={lowerLetters}
                key={lowerColKey}
                colsPerLetter={this.props.colsPerLetter}
            />;

        var fullColumn = [upperColumn, blankColumn, lowerColumn];

        return (
            <Col xs={this.props.colsPerLetter} > {fullColumn} </Col>
        );

    }
}

class LetterColumn extends Component {
    render() {
        return (
            <Col xs={this.props.colsPerLetter} > {this.props.clickableLetters} </Col>
        );
    }
};

class ClickableLetter extends Component {
    render() {
        return (
            <div className="clickable_letter"> <span> {this.props.letter} </span> </div>
        );
    }
};

class LetterBlank extends Component {
    render() {
        return (
            <div className="letter_blank"> <span> &nbsp; </span> </div>
        );
    }
};

export default NameWorkshop;
