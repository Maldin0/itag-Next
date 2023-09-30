"use client";
import React, { useState, useEffect } from "react";
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
  const [user, setUser] = React.useState<User | null>(null);
  const [modalOpen, setModalOpen] = useState<Record<number, boolean>>({});

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
            paddingLeft: "350px",
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
            paddingLeft: "90px",
            fontSize: "1.3rem",
            display: "inline-block",
          }}
        >
          RaceName
        </div>
        <div
          className={profileStyle.char}
          style={{
            paddingLeft: "100px",
            fontSize: "1.3rem",
            display: "inline-block",
          }}
        >
          Details
        </div>
        <div
          className={profileStyle.char}
          style={{
            paddingLeft: "70px",
            fontSize: "1.3rem",
            display: "inline-block",
          }}
        >
          Inventory
        </div>
        <div
          className={profileStyle.char}
          style={{
            paddingLeft: "70px",
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
                style={{ whiteSpace: "nowrap" }}
                onPress={() =>
                  setModalOpen((prev) => ({
                    ...prev,
                    [character._char_id]: true,
                  }))
                }
              >
                Click here
              </Button>
              <Modal
                className={profileStyle.yourModalClass}
                isOpen={modalOpen[character._char_id]}
                onOpenChange={() =>
                  setModalOpen((prev) => ({
                    ...prev,
                    [character._char_id]: !prev[character._char_id],
                  }))
                }
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalBody>
                        <div className={profileStyle.modaldetails}>
                          <p><strong>Character name:</strong> {character.name}</p>
                          <p><strong>Class name:</strong> {character.class.name}</p>
                          <p><strong>Race name:</strong> {character.race.name}</p>
                          <p><strong>Status:</strong></p>
                          <p></p>
                          {Object.entries(character.status).map(
                            ([key, value]) => (
                              <div style={{paddingLeft:'15px'}} key={key}>
                                <strong>
                                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                                </strong>{" "}
                                {value}
                              </div>
                            )
                          )}
                        </div>
                      </ModalBody>
                      <ModalFooter></ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        ))}

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
