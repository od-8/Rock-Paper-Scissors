def winner(player_one, player_two = 'ai')
  # Handles if the person is playing agianst the ai
  if player_two == 'ai'
    result = rand(1..3)
    player_two = 'rock' if result == 1
    player_two = 'paper' if result == 2
    player_two = 'scissors' if result == 3
  end

  # If both players input the same choice then it is a draw
  if player_one == player_two
    return "Its a draw as you both chose #{player_one.capitalize}."
  end

  # Handles when player 1 chooses rock
  if player_one == 'rock'
    case player_two
    when 'paper'
      return "Player 1 wins, they chose #{player_one.capitalize}."
    when 'scissors'
      return  "Player 2 wins, they chose #{player_two.capitalize}."
    end
  end

  # Handles when player 1 chooses paper
  if player_one == 'paper'
    case player_two
    when 'rock'
      return  "Player 1 wins, they chose #{player_one.capitalize}."
    when 'scissors'
      return  "Player 2 wins, they chose #{player_two.capitalize}."
    end
  end

  # Hadles when player 1 chooses scissors
  if player_one == 'scissors'
    case player_two
    when 'paper'
      return  "Player 1 wins, they chose #{player_one.capitalize}."
    when 'rock'
      return  "Player 2 wins, they chose #{player_two.capitalize}."
    end
  end

end

puts 'Are you playing another person or would you like to play the computer?'

sleep 1

puts ''
puts '- Input "person" if you are playing another person:'
puts '- Input "ai" if you would like to play against the computer:'
puts ''

sleep 0.5

opponent = gets.chomp.downcase
puts ''

sleep 0.5

until (opponent == 'person') || (opponent == 'ai')
  puts 'You must input either the word person or ai:'
  opponent = gets.chomp
end

puts ''

if opponent == 'ai'
  puts '- For this game the ai will be labeled as player 2'
  sleep 0.5
  puts '- So if it says player 2 won, that means the ai won'
  sleep 0.5
  puts '- You are player 1'
else
  puts '- For this game player 1 will be the first person to chose'
  sleep 0.5
  puts '- And player 2 wil be the second person to chose'
end

if opponent == 'person'
  puts ''
  puts 'Player 1, input rock, paper or scissors:'
  player_one = gets.chomp.downcase

  # Makes sure player 1 inputs a valid choice
  until (player_one == 'rock') || (player_one == 'paper') || (player_one == 'scissors')
    puts 'Player 1, you must input rock, paper or scissors:'
    player_one = gets.chomp.downcase
  end

  puts ''
  puts 'Player 2, input rock, paper or scissors:'
  player_two = gets.chomp.downcase

  # Makes sure player 2 inputs a valid choice
  until (player_two == 'rock') || (player_two == 'paper') || (player_two == 'scissors')
    puts 'Player 2, you must input rock, paper or scissors:'
    player_two = gets.chomp.downcase
  end

  puts ''
  puts winner(player_one, player_two)

elsif opponent == 'ai'
  puts ''
  puts 'Player, input rock, paper or scissors:'
  player_one = gets.chomp.downcase

  # Makes sure player 1 inputs a valid choice
  until (player_one == 'rock') || (player_one == 'paper') || (player_one == 'scissors')
    puts 'Player 1, you must input rock, paper or scissors:'
    player_one = gets.chomp.downcase
  end

  puts ''
  puts winner(player_one)
end
