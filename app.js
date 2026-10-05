        var newOne = document.getElementById("ipp");

        function getvalue(e) {
            if (newOne.value === " ") {
                newOne.value = "";
            }
            newOne.value += e;
        }

        function solution(e) {
            if (newOne.value.trim() !== "") {
                try {
                    newOne.value = eval(newOne.value);
                } catch (error) {
                    newOne.value = "Error";
                }
            }
        }

        function clrOne(e) {
            newOne.value = newOne.value.slice(0, -1);
        }

        function clrAll(e) {
            newOne.value = " ";
        }
