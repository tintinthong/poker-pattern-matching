// Royal/straight flush: "(2345A|23456|34567|...|9TJQK|TJQKA)#(\\w)\\1{4}"
// Four of a kind:       ".*(\\w)\\1{3}.*#.*"
// Full house:           "((\\w)\\2\\2(\\w)\\3|(\\w)\\4(\\w)\\5\\5)#.*"
// Flush:                ".*#(\\w)\\1{4}"
// Straight:             "(2345A|23456|34567|...|9TJQK|TJQKA)#.*"
// Three of a kind:      ".*(\\w)\\1\\1.*#.*"
// Two pair:             ".*(\\w)\\1.*(\\w)\\2.*#.*"
// One pair:             ".*(\\w)\\1.*#.*"
// High card:            (none)
