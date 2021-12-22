 var telescope = {
          make: "Nasa",
          type: "Cool",
          color: "White",
          isTurned0n: "false",
          turn0n: function () { 
            this.isTurned0n = true;
          },
          fly: function () {
            alert("fly");
          },
          switchTelescope: function (is0n) {
            if (is0n == true) {
              this.isTurned0n = true;
            } else { this.isTurned0n = false;
            }
          }

        };