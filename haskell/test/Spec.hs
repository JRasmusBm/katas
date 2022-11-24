import Test.Hspec

import RobotTransfer

main :: IO ()
main = do
  describe "Robot Transfer" $ do
    it "Example Tests" $ do
      robotTransfer [ ["0,1","0,0","1,2"]
                    , ["1,1","1,0","0,2"]
                    , ["2,1","2,0","0,0"]
                    ] 2 `shouldBe` 8
      robotTransfer [ ["0,1","0,0"]
                    , ["1,1","1,0"]
                    ] 2 `shouldBe` 4
