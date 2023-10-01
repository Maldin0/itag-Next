"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import profileStyle from "./profileStyle.module.css";
import line from "./images/line.png";
import { log } from "util";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

type Props = {};

interface Skill {
  name: string;
  details?: string;
}

interface BagItem {
  name: string;
  detail: string;
}

interface CharacterStatus {
  dex: number;
  wis: number;
  int: number;
  str: number;
  cha: number;
  con: number;
  hp: number;
}

interface Trait {
  name: string;
  detail: string;
}

interface ClassFeature {
  name: string;
  detail: string;
}

interface Spell {
  name: string;
  interval_time: number;
  duration: number;
  range: number;
  details: string;
}

interface Race {
  traits: Trait[];
  db: any;
  name: string;
}

interface CharacterClass {
  features: ClassFeature[];
  spell: Spell[];
  db: any;
  name: string;
}

interface Character {
  skills: Skill[];
  bag: BagItem[];
  status: CharacterStatus;
  db: any;
  user_id: number;
  _char_id: number;
  name: string;
  gold: number;
  background: string;
  active: boolean;
  race: Race;
  class: CharacterClass;
}

export interface User {
  user: {
    _char: Character[];
    db: any;
    _username: string;
    _password: string;
    _email: string;
    _user_id: number;
  };
}

export default function Profile({}: Props) {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [item_id, setItem_id] = React.useState<Number>(0);
  const [char_id, setChar_id] = React.useState<Number>(0);
  const [user, setUser] = React.useState<User | null>(null);
  const [openedModalDetails, setOpenedModalDetails] = useState<Number | null>(
    null
  );
  const [openedModalInventory, setOpenedModalInventory] =
    useState<Number | null>(null);

  const allitems = {
    "Health Potion": 1,
    Antidote: 2,
    Axe: 3,
    Shield: 4,
    Sword: 5,
    Guitar: 6,
    Bow: 7,
    Staff: 8,
    Grimoire: 9,
    Dagger: 10,
  };

  async function handleRemove() {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8080/users/characters/remove_item",
        {char_id,item_id}
      );
      if (res.data.status === "Success") {
        alert(res.data.message);
        router.refresh();
      } else {
        alert(res.data.message);
        router.refresh();
      }
    } catch (error) {
      // TODO: Still Noti the massage bitches
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("An unexpected error occurred.");
      }
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get("http://localhost:8080/users/data");
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className={profileStyle.myImages}>
      <div className={profileStyle.scroll}>
        <div style={{ position: "relative", display: "flex" }}>
          <div className={profileStyle.topline}></div>
          <h1
            className={profileStyle.topfont}
            style={{
              position: "absolute",
              top: "20%",
              left: "3%",
              color: "White",
            }}
          >
            ITAG
          </h1>
        </div>

        <div
          className={profileStyle.profile}
          style={{ display: "inline-flex" }}
        >
          <div
            className={profileStyle.username}
            style={{ display: "inline-block" }}
          >
            Username : {user?.user._username}{" "}
          </div>
          <div
            className={profileStyle.email}
            style={{ display: "inline-block" }}
          >
            Email : {user?.user._email}
          </div>
        </div>

        <div className={profileStyle.line}></div>
        <div className={profileStyle.char} style={{ paddingLeft: "800px" }}>
          Your character
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div
          className={profileStyle.char}
          style={{
            paddingLeft: "300px",
            fontSize: "1.3rem",
            display: "inline-block",
          }}
        >
          CharacterName
        </div>
        <div
          className={profileStyle.char}
          style={{
            paddingLeft: "40px",
            fontSize: "1.3rem",
            display: "inline-block",
          }}
        >
          ClassName
        </div>
        <div
          className={profileStyle.char}
          style={{
            paddingLeft: "60px",
            fontSize: "1.3rem",
            display: "inline-block",
          }}
        >
          RaceName
        </div>
        <div
          className={profileStyle.char}
          style={{
            paddingLeft: "80px",
            fontSize: "1.3rem",
            display: "inline-block",
          }}
        >
          Details
        </div>
        <div
          className={profileStyle.char}
          style={{
            paddingLeft: "110px",
            fontSize: "1.3rem",
            display: "inline-block",
          }}
        >
          Inventory
        </div>

        <div
          className={profileStyle.char}
          style={{
            paddingLeft: "80px",
            fontSize: "1.3rem",
            display: "inline-block",
          }}
        >
          Delete
        </div>
        <div>&nbsp;</div>
        {user?.user._char.map((character, _char_id) => (
          <div className={profileStyle.flexContainer} key={_char_id}>
            {/* Render your character data here */}

            <div>&nbsp;</div>

            <div>
              <h1>{character.name}</h1>
            </div>
            <div>
              <h1>{character.class.name}</h1>
            </div>
            <div>
              <h1>{character.race.name}</h1>
            </div>
            <div>
              <Button
                className={profileStyle.Clickme}
                style={{ whiteSpace: "nowrap" }}
                onPress={() => setOpenedModalDetails(character._char_id)}
              >
                Click here
              </Button>
              <Modal
                className={profileStyle.yourModalClass}
                isOpen={openedModalDetails === character._char_id}
                onOpenChange={() => setOpenedModalDetails(null)}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader>
                        {" "}
                        <h1
                          className={profileStyle.font}
                          style={{
                            fontSize: "2rem",
                            paddingLeft: "330%",
                          }}
                        >
                          <strong>DETAILS</strong>
                        </h1>
                      </ModalHeader>
                      <ModalBody style={{paddingTop:'50px'}}>
                        <div className={profileStyle.modaldetails}>
                          <p>
                            <strong>Character name:</strong> {character.name}
                          </p>
                          <p>
                            <strong>Class name:</strong> {character.class.name}
                          </p>
                          <p>
                            <strong>Race name:</strong> {character.race.name}
                          </p>
                          <p
                            style={{
                              paddingTop: "15px",
                              textDecoration: "underline",
                            }}
                          >
                            <strong>Status:</strong>
                          </p>

                          {Object.entries(character.status).map(
                            ([key, value]) => (
                              <div
                                style={{
                                  paddingLeft: "15px",
                                  paddingTop: "15px",
                                }}
                                key={key}
                              >
                                <strong>
                                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                                </strong>{" "}
                                {value}
                              </div>
                            )
                          )}
                          <p
                            style={{
                              paddingTop: "15px",
                              textDecoration: "underline",
                            }}
                          >
                            <strong>BackStory:</strong>{" "}
                          </p>
                          <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {character.background}
                          </p>

                          <p
                            style={{
                              paddingTop: "15px",
                              textDecoration: "underline",
                            }}
                          >
                            <strong>Skills:</strong>
                          </p>

                          {character.skills && character.skills.length > 0 ? (
                            character.skills.map((skill, index) => (
                              <div
                                key={index}
                                style={{
                                  paddingLeft: "15px",
                                  paddingTop: "15px",
                                }}
                              >
                                <strong>&nbsp;&nbsp;&nbsp;{skill.name}:</strong>
                                {skill.details && <span> {skill.details}</span>}
                              </div>
                            ))
                          ) : (
                            <p>
                              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;This character has
                              no skill
                            </p>
                          )}

                          <p
                            style={{
                              paddingTop: "15px",
                              textDecoration: "underline",
                            }}
                          >
                            <strong>Features:</strong>
                          </p>
                          {character.class.features &&
                          character.class.features.length > 0 ? (
                            character.class.features.map((feature, index) => (
                              <div
                                key={index}
                                style={{
                                  paddingTop: "15px",
                                  paddingLeft: "15px",
                                }}
                              >
                                <h3>
                                &nbsp;&nbsp;&nbsp;<strong>{feature.name}</strong>
                                </h3>
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{feature.detail}</p>
                              </div>
                            ))
                          ) : (
                            <p style={{ paddingLeft: "15px" }}>
                              &nbsp;&nbsp;&nbsp;No features available for this class.
                            </p>
                          )}

                          <p
                            style={{
                              paddingTop: "15px",
                              textDecoration: "underline",
                            }}
                          >
                            <strong>Spells:</strong>
                          </p>
                          {character.class.spell &&
                          character.class.spell.length > 0 ? (
                            character.class.spell.map((spell, index) => (
                              <div
                                key={index}
                                style={{
                                  paddingTop: "15px",
                                  paddingLeft: "15px",
                                }}
                              >
                                <h3>
                                &nbsp;&nbsp;&nbsp;<strong>{spell.name}</strong>
                                </h3>
                                <p style={{ paddingLeft: "40px" }}>
                                  <strong>Interval Time:</strong>{" "}
                                  {spell.interval_time}
                                </p>
                                <p style={{ paddingLeft: "40px" }}>
                                  <strong>Duration:</strong> {spell.duration}
                                </p>
                                <p style={{ paddingLeft: "40px" }}>
                                  <strong>Range:</strong> {spell.range}
                                </p>
                                <p style={{ paddingLeft: "40px" }}>
                                  <strong>Detail:</strong> {spell.details}
                                </p>
                              </div>
                            ))
                          ) : (
                            <p style={{ paddingLeft: "15px" }}>
                              No spells available for this class.
                            </p>
                          )}

                          <p
                            style={{
                              paddingTop: "15px",
                              textDecoration: "underline",
                            }}
                          >
                            <strong>Traits:</strong>
                          </p>
                          {character.race.traits &&
                          character.race.traits.length > 0 ? (
                            character.race.traits.map((trait, index) => (
                              <div
                                key={index}
                                style={{
                                  paddingTop: "15px",
                                  paddingLeft: "15px",
                                }}
                              >
                                <h3>
                                  <strong>{trait.name}</strong>
                                </h3>
                                <p>&nbsp;&nbsp;&nbsp;{trait.detail}</p>
                              </div>
                            ))
                          ) : (
                            <p>No traits available for this race.</p>
                          )}
                        </div>
                      </ModalBody>
                      <ModalFooter></ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
            <div>
              <Button
                className={profileStyle.Clickme}
                style={{ whiteSpace: "nowrap" }}
                onPress={() => setOpenedModalInventory(character._char_id)}
              >
                Click here
              </Button>
              <Modal
                className={profileStyle.yourModalClass}
                isOpen={openedModalInventory === character._char_id}
                onOpenChange={() => setOpenedModalInventory(null)}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader>
                        {" "}
                        <div>
                          <h1
                            className={profileStyle.font}
                            style={{
                              fontSize: "2rem",
                              paddingLeft: "220%",
                            }}
                          >
                            <strong>INVENTORY</strong>
                          </h1>
                        </div>
                      </ModalHeader>
                      <ModalBody>
                        <p>&nbsp;</p>
                        <Table >
                          <TableHeader>
                            <TableColumn style={{paddingTop:'50px'}}>ITEM</TableColumn>
                            <TableColumn style={{paddingTop:'50px'}}>DETAIL</TableColumn>
                            <TableColumn style={{paddingTop:'50px'}}>STATUS</TableColumn>
                          </TableHeader>
                          <TableBody>
                            {user?.user._char[_char_id]?.bag.map(
                              (item, index) => (
                                <TableRow
                                  key={index}
                                  className={profileStyle.modaltable}
                                >
                                  <TableCell style={{ paddingTop: "30px" }}>
                                    {item.name}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      paddingTop: "30px",
                                      paddingLeft: "250px",
                                    }}
                                  >
                                    {item.detail}
                                  </TableCell>
                                  <TableCell style={{ paddingTop: "30px" }}>
                                    <div
                                      className={profileStyle.Clickme}
                                      onClick={() => {
                                        setItem_id(
                                          allitems[
                                            item.name as keyof typeof allitems
                                          ]
                                        );
                                        setChar_id(character._char_id);
                                        console.log(character._char_id);
                                        console.log(allitems[
                                          item.name as keyof typeof allitems
                                        ]);
                                        handleRemove();
                                      }}
                                    >
                                      <button>Delete</button>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              )
                            )}
                          </TableBody>
                        </Table>
                      </ModalBody>
                      <ModalFooter></ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        ))}
        <div></div>

        <Link href="/character">
          <div
            className={profileStyle.button}
            style={{ marginTop: "5%", marginLeft: "40vw" }}
          >
            <button type={"submit"} style={{ marginTop: "5%" }}>
              create
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
