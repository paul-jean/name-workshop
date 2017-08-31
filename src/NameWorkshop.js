import React, { Component } from 'react';
import './NameWorkshop.css';
import { Grid, Row, Col } from 'react-bootstrap';

class NameWorkshop extends Component {
    constructor(props) {
        super(props);
        this.nameLength = 6;
        /*
        var weights = {};
        for (var i=0; i < this.nameLength; i++) {
            weights[i] = {};
                0
        }
        */
        var chosenLetters = new Array(this.nameLength).fill(null);
        this.state = {
            //weights: weights,
            chosenLetters: chosenLetters
        };
        this.handleLetterClick = this.handleLetterClick.bind(this);
        this.consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
        this.vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        this.colsPerLetter = 2;
        // TODO for general name lengths: Math.max(Math.ceil(12.0/this.nameLength), 12);
    }

    letterArray(letter) {
        return this.consonants.indexOf(letter) >= 0 ? this.consonants : this.vowels;
    }

    renderLetter(letter, columnIndex, letterIndex) {
        var key = `${ letter }${ columnIndex }`;
        return (
            <ClickableLetter
                letter = {letter}
                onClick={this.handleLetterClick(letter, columnIndex, letterIndex)}
                key={key}
            >
        );
    }

    renderBlank(columnIndex) {
        var blankKey = `bl${columnIndex}`;
        return (
            <LetterBlank
                selectedLetter={this.state.chosenLetters[columnIndex]}
                key={blankKey}
            />
        );
    }

    renderColumn(columnIndex) { // TODO: columnIndex -> colNum
        var letterColumn = [];
        // TODO: replace this loop with a map
        // insert consonants
        var i, key, letter;
        for (i=0; i < this.consonants.length; i++) {
            letter = this.consonants[i];
            key = `${ letter }${ columnIndex }`;
            letterColumn.push(
                renderLetter(letter, columnIndex, i)
            );
        }

        letterColumn.push(
            this.renderBlank(columnIndex);
        );

        for (i=0; i < this.vowels.length; i++) {
            letter = this.vowels[i];
            key = `${ letter }${ columnIndex }`;
            letterColumn.push(
                renderLetter(letter, columnIndex, i)
            );
        }

        return (
            <Col xs={this.colsPerLetter} > {letterColumn} </Col>
        );
    }

    handleLetterClick(letter, columnIndex, letterIndex) {
        var chosenLetters = this.state.chosenLetters.slice();
        chosenLetters[columnIndex] = this.letterArray(letter)[letterIndex];
        this.setState({
            chosenLetters: chosenLetters
        });
    }

    render() {
        var letterColumns = [];
        // divide the letters in the name into columns
        for (var i=0; i < this.nameLength; i++) {
            letterColumns.push(
                renderColumn(i);
            );
        }
        return (
            <div className="name_workshop">
                <Grid>
                    <Row>
                    {letterColumns}
                    </Row>
                </Grid>
            </div>
        );
    }
}

class ClickableLetter extends Component {
    render() {
        return (
            <div
                onClick={this.props.onClick}
                className="clickable_letter">
                    <span> {this.props.letter} </span>
            </div>
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
