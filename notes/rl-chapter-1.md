---
title: RL Chapter 1
tags:
  - ai-rl
emoji:
    🎓
---

# Four subelements of RL
## Policy
* Defines the agents way of behaving at a given time.
* Roughly a mapping from perceived states of the environment to actions to be take when in those states.
* Can be a simple function/lookup table
* Can be stochastic (randomly sampled from a probability distribution)

## Reward function
* Defines the goal of an RL problem
* Maps each perceived state (or state-action pair) to a single number (reward), indicating the desirability of that state
* _Agent's sole objective is to maximize the total reward in the long run_
* Defines what are good and bad events for an agent
* Unalterable by the agent, but it does serve as a basis for altering the policy

## Value function
* Specifies what is "good" in the long run
* Roughly the total amount of reward an agent can expect to accumulate over the future, starting from the current state 
* Rewards are immediate and intrinsic desirability of a state; values are the long-term desirability of the state after taking into account the states that are likely to follow and the rewards of the states
* _The most important component of almost all RL algorithms is a method for estimating values (efficiently)_
* Another method for solving RL problems are evolutionary methods:
    * The methods search directly in the space of policies without ever appealing to value functions
    * Effective if the space of policies is sufficiently small, or can be structured in a way that good policies are common or easy to find
    * Has advantages on problems in which the learning agent cannot accurately sense the state of its environment
    * Examples: _genetic algorithms_, _genetic programming_, _simulated annealing_
    * Major difference: RL involves learning while interacting with the environment, which evolutionary methods do not do

## Model of the environment (optional)
* Mimics the behavior of an environment
* Given a state/action, a model predicts what the next state and reward will be
* Used for _planning_, which is a way of deciding a course of action by considering possible future situations before they are experienced
* Relatively new **(reminder, this book was written in '98)**


# Example: Tic-Tac-Toe
## Steps
1. Set up a table of numbers for each possible state in the game
    * Each number is the latest estimate of the probability of winning from that state
    * This estimate is the state's _value_; the table is the learned value function
2. Set all states with three X's in a row to have a value of 1
3. Set all states with three O's in a row to have a value of 0
4. Initialize everything else to 0
5. Start playing games
    * Greedily select the move that leads to the state with the greatest value
    * Occasionaly randomly select from other moves instead
        * These are called _exploratory_ moves
    * While playing, change the values of the states we are in, attempting to make them more accurate estimates of the probabilities of winning
        * To do this, we "back up" the value of the state after each _greedy_ move to the state before the move
        * Another way of saying this: the current value of the _earlier_ state is adjusted to be closer to the value of the _later_ state
        ```math
          let s denote the state before the greedy move
          let s' denote the state after the move
          let V(s) be the estimated value of state s

          V(s) <- V(s) + α[V(s') - V(s)]
          where α is a small positive fraction called the step-size parameter (similar to the learning rate)
        ```
        * The method above is known as temporal difference learning (its changes are based on a difference between the estimates at two different times)
        * This is different than evolutionary methods of learning, because an evolutionary method runs many games with a single policy and presumes that all moves leading up to a "win" are credited
            * Value functions evaluate individual states instead

# Exercises
## 1.1 Self-Play
* The RL algorithm would learn to play very similarly to a player that plays optimally
* **Correct answer**: The RL algorithm could learn to allow itself to win

## 1.2 Symmetries
* We can take advantage of symmetries by reducing the state space. When looking up a value for a state, we just have to orient the state to some default orientation.
* I think this would improve the time it takes to achieve the optimal policy
* We should take advantage of the symmetries even if the opponent does not
* Yes, symmetrically equivalent positions have the same values
* **Correct answer**: Reducing the state space also has the advantage of making the learned results more statistically significant.

## 1.3 Greedy play
* I think it would be harmful to greedily choose every move. There are local maxima that the value function estimation might get stuck in.
* **Correct answer**: It never takes a chance on unexplored actions, which might lead to a higher likelihood of a better "win" rate

## 1.4 Learning from Exploration
* We would probably win less by updating probabilities based on exploratory moves. I think it would lead to a more uniform distribution for the probabilities.
* **Correct answer**: Learning from exploratory moves would result in a better understanding of the true probability distribution. Not learning would be ineffective.

## 1.5 Other improvements
* Since the state space is sufficiently small, I think we can do a tree search to find the optimal solution.
* **Correct answer**: Above, plus another option is to basically hardcode some moves given some known states that are always known to be optimal. This would improve the time to learn.

