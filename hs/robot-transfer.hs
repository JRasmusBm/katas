-- https://www.codewars.com/kata/58aaa3ca821a767300000017/train/javascript

module RobotTransfer.Kata (robotTransfer) where

import Test.Hspec

robotTransfer :: [[String]] -> Int -> Int
robotTransfer = undefined

spec :: Spec
spec = do
  describe "Robot Transfer" $ do
    it "Example Tests" $ do
      robotTransfer
        [ ["0,1", "0,0", "1,2"],
          ["1,1", "1,0", "0,2"],
          ["2,1", "2,0", "0,0"]
        ]
        2
        `shouldBe` 8
          robotTransfer
          [ ["0,1", "0,0"],
            ["1,1", "1,0"]
          ]
          2
        `shouldBe` 4
