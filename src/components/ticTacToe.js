/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'

import Circle from './Circle'
import Cross from './Cross'
import ResetButton from './ResetButton'

export default class TicTacToe extends Component {

    constructor() {
        super()
        this.state = {
            ticTacToe: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            currentPlayer: 1
        }
    }

    componentDidMount() {
        this.setInitialValues()
    }

    setInitialValues = () => {
        this.setState({ ticTacToe: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], currentPlayer: 1 })
    }

    renderIcon = (row, col) => {
        var value = this.state.ticTacToe[row][col]
        switch (value) {
            case 1: return <Cross />
            case -1: return <Circle />
            default: return <View />
        }
    }


    getWinner = () => {
        const FIELDS = 3
        var arr = this.state.ticTacToe
        var sum

        for (var i = 0; i < FIELDS; i++) {
            sum = arr[i][0] + arr[i][1] + arr[i][2]
            if (sum == 3) return 1
            else if (sum == -3) return -1
        }

        for (var i = 0; i < FIELDS; i++) {
            sum = arr[0][i] + arr[1][i] + arr[2][i]
            if (sum == 3) return 1
            else if (sum == -3) return -1
        }

        sum = arr[0][0] + arr[1][1] + arr[2][2]
        if (sum == 3) return 1
        else if (sum == -3) return -1


        sum = arr[0][0] + arr[1][1] + arr[2][2]
        if (sum == 3) return 1
        else if (sum == -3) return -1


        return 0
    }


    onFieldPress = (row, col) => {
        //Don't let it change
        var value = this.state.ticTacToe[row][col]
        if (value != 0) return;

        // Fetch Current Player
        var currentPlayer = this.state.currentPlayer

        // Set the field
        var arr = this.state.ticTacToe.slice()
        arr[row][col] = currentPlayer;
        this.setState({ ticTacToe: arr })

        var nextPlayer = (currentPlayer == 1) ? -1 : 1;
        this.setState({ currentPlayer: nextPlayer })

        var winner = this.getWinner()
        console.log(winner, ':::winner')
        if (winner == 1) {
            Alert.alert("'X' is the winner")
            this.setInitialValues()
        } else if (winner == -1) {
            Alert.alert("'0' is the winner")
            this.setInitialValues()
        }
    }

    onResetClick = () => {
        this.setInitialValues()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => this.onFieldPress(0, 0)} style={[styles.field, { borderLeftWidth: 4, borderTopWidth: 4 }]}>
                        {this.renderIcon(0, 0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onFieldPress(0, 1)} style={[styles.field, { borderTopWidth: 4 }]}>
                        {this.renderIcon(0, 1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onFieldPress(0, 2)} style={[styles.field, { borderTopWidth: 4, borderRightWidth: 4 }]}>
                        {this.renderIcon(0, 2)}
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.onFieldPress(1, 0)} style={[styles.field, { borderLeftWidth: 4 }]}>
                        {this.renderIcon(1, 0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onFieldPress(1, 1)} style={[styles.field, {}]}>
                        {this.renderIcon(1, 1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onFieldPress(1, 2)} style={[styles.field, { borderRightWidth: 4 }]}>
                        {this.renderIcon(1, 2)}
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.onFieldPress(2, 0)} style={[styles.field, { borderLeftWidth: 4, borderBottomWidth: 4 }]}>
                        {this.renderIcon(2, 0)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onFieldPress(2, 1)} style={[styles.field, { borderBottomWidth: 4 }]}>
                        {this.renderIcon(2, 1)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onFieldPress(2, 2)} style={[styles.field, { borderBottomWidth: 4, borderRightWidth: 4 }]}>
                        {this.renderIcon(2, 2)}
                    </TouchableOpacity>
                </View>
                <ResetButton onClickRestart={this.onResetClick} />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        flex: 1
    },
    field: {
        borderWidth: 5,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})