// Copyright 2024 klaud
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const exportedFunction = require("../src/page-template")
const Manager = require("../lib/Manager")
test("the template is a string", ()=> {
    const manager = new Manager("Klaudia", 11, "Klaudia@email.com", "112")
    var theTemplate = exportedFunction([manager])
    expect(typeof(theTemplate)).toEqual("string")
})
